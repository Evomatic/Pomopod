<template>
  <Buttons
    v-on:start="this.buttonText = 'start'"
    v-on:stop="this.buttonText = 'stop'"
    v-on:startTime="countDownTimer"
    v-on:stopTimer="stopTimer"
    v-on:buttonStateStart="this.buttonState = false;"
    v-on:buttonStateStop="this.buttonState = true;"
    v-bind:buttonstate="buttonState"
  />
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

import Buttons from '@/components/Buttons.vue'
import Focus from '@/components/Focus.vue'
import Break from '@/components/Break.vue'

export default {
  name: 'App',
  components:{
    Buttons,
    Focus,
    Break
  },
  data: function() {
    const focusDuration = 0.2 * 60;
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
    }

    
  
    },

   
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
