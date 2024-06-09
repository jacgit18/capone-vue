<template>
    <div>
    
      <p>USER </p> {{ id }}
    <hr>
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    
    </div>
      
    
    </template>
    
    <script>
    
    export default {
        data(){
            return {
                id: this.$route.params.id
            }
        },

        methods:{
            navigateToHome(){
                this.$router.push("/")
            }
        }
    
    }
    </script>
    
    <style scoped>
    
    </style>
    