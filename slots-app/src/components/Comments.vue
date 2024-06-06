<template>
    <div>
        <div>

        
            <slot name="register"></slot>
        </div>

            <hr>

    <div>

            <slot name="login"></slot>
        </div>

    </div>
  </template>
  
  <script>  
  export default {
   
  };
  </script>
  
  
  <style scoped>
  
  div {
    border: 1px solid black;
    padding: 30px;
    text-align: center;
    margin: auto;
    font-size: 100;
  }
  </style>