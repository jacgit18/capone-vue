<template>
    <div class="component">
      <h3>User Details : {{ switchName() }}</h3>
      <p>User Age : {{ userAge }}</p>
      <button @click="resetName">Reset Name</button>
    </div>
  </template>
  
  <script>
  import { eventBus } from '../main';
  
  export default{
      props:{
        
        myName:String,
        userAge:Number,
      
      },
      methods:{
          switchName(){
              return this.myName.split('').reverse().join('')
          },
          resetName(){
            this.myName='charles'
            this.$emit('nameWasReset',this.myName)
          }
      },
      created(){
        eventBus.$on('ageWasUpdated',(userAge) =>{
          this.userAge=userAge
        })
      }
  }
  </script>
  <style scoped>
  div {
    background-color: lightcoral;
  }
  </style>
  