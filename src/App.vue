<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Timer v-bind:rendertime="renderTime"/>
</template>
<script>
import Timer from './components/Timer.vue'

export default {
  name: 'App',
  components: {
    Timer
  },
  data(){
    return {
      startingMinutes: 25,
      time: 0,
      renderTime: ""

    }
  },

 mounted() {
   this.countDownTimer();
 },



  methods: {
    
    countDownTimer(){
      setInterval(this.updateCountdown, 1000);
    },

    updateCountdown(){
      this.time = this.startingMinutes * 60;
      console.log("ok", this.time)
      const minutes = Math.floor(this.time / 60);
      console.log("HERE", minutes)
      let seconds = this.time % 60;
      console.log("here too!", seconds)
      this.renderTime = `${minutes}: ${seconds}`; 
      this.time--;
    }
  }
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
