<template>
  {{timeDisplay}}
  <Buttons
    v-on:start="buttonState = true"
    v-on:stop="buttonState = false"
    
  />
</template>
<script>

import Buttons from '@/components/Buttons.vue'

export default {
  name: 'App',
  components:{
    Buttons
  },
  data: ()=> {
    const focusDuration = 25;
    return {
      currentFocusTimeInSeconds: focusDuration * 60,
      buttonState: false
    };
  },
 

  computed: {
    timeDisplay() {
      const minutes = parseInt(this.currentFocusTimeInSeconds / 60);
      const seconds = this.currentFocusTimeInSeconds % 60;

      const paddedMinutes = ("0" + minutes).slice(-2);
      const paddedSeconds = ("0" + seconds).slice(-2);

      return `${paddedMinutes}:${paddedSeconds}`;
    }
  },

  mounted(){
    setInterval(this.countDownTimer, 1000)
  },

  methods: {
    countDownTimer() {
      if(this.currentFocusTimeInSeconds > 0 && this.buttonState === true){
        console.log(this.currentFocusTimeInSeconds)
          this.currentFocusTimeInSeconds--;
      } else if (this.currentFocusTimeInSeconds === 0){
        console.log("break time")
        return;
      }
        
    },

  
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
