<template>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <slot name="header"></slot>
        </div>
        <div class="card-body">
          <h5 class="card-title"><slot name="title"></slot></h5>
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped></style>
  