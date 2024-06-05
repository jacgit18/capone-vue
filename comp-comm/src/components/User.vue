<template>
    <div class="container">
  
      <div>
        <ul class="list-group">
        <li lass="list-group-item" v-for="index in 5"> Server # {{index}} </li>
        
        </ul>
  
        <!-- User Status Section -->
        <!-- <div class="col-md-4">
          <user-status></user-status>
        </div> -->
      </div>
  
       </div>

  </template>
  
  <script>
  import UserData from "./Userdata";
  
  export default {
    data() {
      return {
        Status: "Running"
      };
    },
    components: {
      'user-status': UserData
    },
    methods: {
      changeStatus() {
        this.Status = "Stopped";
      }
    }
  };
  </script>
  

  