<template>
    <div class="component">
      <h3>User Edit :{{ userAge }}</h3>
      <button @click="editAge">Edit Age</button>
    </div>
  </template>
  
  <script>
  import { eventBus } from '../main';
  export default {
    props:['userAge'],
  
  methods: {
    editAge(){
       this.userAge=30
       //this.$emit('ageWasUpdated',this.userAge)
       eventBus.$emit('ageWasUpdated',this.userAge)
    }
  }
  }
  
  </script>
  <style scoped>
  div {
    background-color: lightgreen;
  }
  </style>