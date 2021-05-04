<template lang="">
    <div class="startbtn"> 
        <button v-on:click="startButton" type="button">Start</button> 
    </div>   
    <div class="stopbtn">
        <button v-on:click="stopButton" type="button">Stop</button> 
    </div>
</template>


<script>
export default {
    name: 'Buttons',
    props: [
    'startButtonState',
    'buttonstate'],
    emits: [
    'start', 
    'stop', 
    'click', 
    'startTime', 
    'stopTimer',
    'buttonStateStart',
    'buttonStateStop'],

    data: () => ({
    }),
    methods: {

    startButton() {
        if(this.buttonstate) {
    console.log("START")
      this.$emit('start')
      this.$emit('startTime')
      this.$emit('buttonStateStart')
      
        }
    },
    stopButton() {
        if(!this.buttonstate) {
      console.log("STOP")
      this.$emit('stop')
      this.$emit('stopTimer')
      this.$emit('buttonStateStop')
     
        }
    },

    resetButton(){

    }

    }
};
</script>

<style lang="scss" scoped>

</style>