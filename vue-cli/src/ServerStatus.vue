<template>
    <div class="container">
      <!-- Header Section -->
      <div class="row my-4">
        <div class="col text-center">
          <p class="h4">The server status is {{ Status }}</p>
          <button class="btn btn-primary mt-2" @click="changeStatus">Change Status</button>
        </div>
      </div>
  
      <!-- Main Content Section -->
      <div class="row">
        <!-- Left Side Section -->
        <div class="col-md-4">
          <p class="h5">Left Side</p>
          <ul class="list-group">
            <li class="list-group-item">Server 1</li>
            <li class="list-group-item">Server 2</li>
            <li class="list-group-item">Server 3</li>
            <li class="list-group-item">Server 4</li>
            <li class="list-group-item">Server 5</li>
          </ul>
        </div>
  
        <!-- User Status Section -->
        <!-- <div class="col-md-4">
          <user-status></user-status>
        </div> -->
      </div>
  
      <!-- Footer Section -->
      <div class="row my-4">
        <div class="col text-center">
          <p class="h6">Footer: All servers are managed here</p>
        </div>
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
  

  