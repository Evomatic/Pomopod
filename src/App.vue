<template>
  {{timeDisplay}}
</template>
<script>


export default {
  name: 'App',

  data: ()=> {
    const focusDuration = 25;
    return {
      currentFocusTimeInSeconds: focusDuration * 60,
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
      if(this.currentFocusTimeInSeconds > 0){
        console.log(this.currentFocusTimeInSeconds)
          this.currentFocusTimeInSeconds--;
      } else if (this.currentFocusTimeInSeconds === 0){
        console.log("break time")
        return;
      }
        
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
