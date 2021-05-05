<template>
<div class="container">
  <div id="title">
    <h1 class="pomopod">Pomopod</h1>
    <img class="pic" src="./assets/seedling_1f331.png" alt="seedling"/>
  </div>
  <div class="timer">{{focusTimeDisplay}}</div> 
  <div class="startbtn"> 
        <button v-on:click="startButton" type="button">Start</button> 
    </div>   
    <div class="stopbtn">
        <button v-on:click="stopButton" type="button">Stop</button> 
    </div>
</div>
  <!-- <Buttons
    v-on:start="this.buttonText = 'start'"
    v-on:stop="this.buttonText = 'stop'"
    v-on:startTime="countDownTimer"
    v-on:stopTimer="stopTimer"
    v-on:buttonStateStart="this.buttonState = false;"
    v-on:buttonStateStop="this.buttonState = true;"
    v-bind:buttonstate="buttonState"
  /> -->
  <Focus
    v-if="focusOrBreakView"
    v-bind:focustimedisplay="focusTimeDisplay"
  />
  <Break
  v-if="!focusOrBreakView"
    v-bind:breaktimedisplay="breakTimeDisplay"
  />



</template>
<script>

//import Buttons from '@/components/Buttons.vue'
import Focus from '@/components/Focus.vue'
import Break from '@/components/Break.vue'

export default {
  name: 'App',
  components:{
    //Buttons,
    Focus,
    Break
  },
  data: function() {
    const focusDuration = 25 * 60;
    const breakDuration = 0.1 * 60;
    return {
      focusDuration: focusDuration,
      breakDuration: breakDuration,
      currentFocusTimeInSeconds: focusDuration,
      currentBreakTimeInSeconds: breakDuration,
      buttonText:"" ,
      focusOrBreakView: true,
      timeInterval: null,
      buttonState: true
    };
  },
 
  computed: {
    focusTimeDisplay() {
      const minutes = parseInt(this.currentFocusTimeInSeconds / 60);
      const seconds = this.currentFocusTimeInSeconds % 60;

      const paddedMinutes = ("0" + minutes).slice(-2);
      const paddedSeconds = ("0" + seconds).slice(-2);

      return `${paddedMinutes}:${paddedSeconds}`;
    },

    breakTimeDisplay(){
      const minutes = parseInt(this.currentBreakTimeInSeconds / 60);
      const seconds = this.currentBreakTimeInSeconds % 60;

      const paddedMinutes = ("0" + minutes).slice(-2);
      const paddedSeconds = ("0" + seconds).slice(-2);

      return `${paddedMinutes}:${paddedSeconds}`;
    }
  },

  methods: {

    countDownTimer(){
      if(this.currentFocusTimeInSeconds > -1 && this.buttonText === "start" && this.focusOrBreakView === true){
           this.timeInterval = setInterval(()=>{
            this.currentFocusTimeInSeconds--
            console.log(this.currentFocusTimeInSeconds)
           if(this.currentFocusTimeInSeconds === -1 && this.focusOrBreakView === true ){
             clearInterval(this.timeInterval)
             this.changeView();
           }
      }, 1000);
      }
      // } else if (this.currentFocusTimeInSeconds === -1 && this.focusOrBreakView === true){
      //   this.changeView();
      // }
      
      if(this.currentBreakTimeInSeconds > -1 && this.buttonText === "start" && this.focusOrBreakView === false) {
        this.timeInterval = setInterval(()=>{
          this.currentBreakTimeInSeconds--
           if(this.currentBreakTimeInSeconds === -1 && this.focusOrBreakView === false ){
             clearInterval(this.timeInterval)
             this.changeView();
           }
        }, 1000);
      }
      // } else if (this.currentBreakTimeInSeconds === -1 && this.focusOrBreakView === false){
      //   this.changeView();
      
      // }

  
    },



    // focusCountDownTimer() {
    //   console.log(this.buttonText)
    //   if(this.currentFocusTimeInSeconds > 0 && this.buttonText === "start" && this.focusOrBreakView === true){
    //        this.timeInterval = setInterval(()=>{
    //        this.currentFocusTimeInSeconds--
    //        if(this.currentFocusTimeInSeconds === 0){
    //          clearInterval(this.timeInterval)
    //          this.changeView();
    //        }
    //     }, 1000);
        
    //   } else if (this.currentFocusTimeInSeconds === 0){
    //     this.changeView();
    //   }
    // },

  //  breakCountDownTimer() {
  //    console.log("BREAK")
  //     if(this.currentBreakTimeInSeconds > 0 && this.buttonText === "start" && this.focusOrBreakView === false){
  //       this.timeInterval = setInterval(()=>{
  //          this.currentBreakTimeInSeconds--
  //       }, 1000);
  //     } else if (this.currentBreakTimeInSeconds === 0){
  //       this.changeView();
      
  //     }
        
  //   }, 

    changeView(){
      if (this.currentFocusTimeInSeconds === -1){
        this.currentBreakTimeInSeconds = this.breakDuration;
        this.focusOrBreakView = false;
        this.buttonState = true;
        this.stopTimer();
      }
      if (this.currentBreakTimeInSeconds === -1){
        this.currentFocusTimeInSeconds = this.focusDuration;
        this.stopTimer();
        this.focusOrBreakView = true;
        this.buttonState = true;
        console.log("AFTER CHANGEVIEW")
         
         
      }
    },

    stopTimer(){
      clearInterval(this.timeInterval);
    },

    startButton(){
      this.buttonText = 'start';
      this.buttonState = false;
      this.countDownTimer();
    },

    stopButton(){
      this.buttonText = 'stop';
      clearInterval(this.timeInterval);
      this.buttonState = true;
    }

    
  
    },

   
  }

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poiret One';
  background: #d8f3dc;
  
}

.pic{
  margin-top: 11px;
  margin-left: 10px;
  width: 30px;
  height: 30px;
 
}

.container{
  min-height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
  
  

}

#title{
  display: flex;
  flex-direction: row;
}
.pomopod{
  font-size: 35px;
}
.timer{
  position:relative;
  margin-top:100px;
  width:195px;
  font-size: 50px;
}


</style>
