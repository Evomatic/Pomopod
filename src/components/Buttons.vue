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
    props: ['startButtonState'],
    data: () => ({
        
    }),

    computed: {
    
    },
    

    methods: {

    startButton() {
        console.log("CLICK!")
      this.$emit('start')

    },
    stopButton() {
        console.log("CLICK!")
      this.$emit('stop')

    },
    }
};
</script>

<style lang="scss" scoped>

</style>