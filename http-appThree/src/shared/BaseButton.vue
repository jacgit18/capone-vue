<template>
    <div>
      <button>
        <slot></slot>
      </button>
    </div>
  </template>
  
  <style scoped>
  button {
    border: 1px solid blue;
    background-color: blueviolet;
    color: white;
    padding: 0.5rem 2rem;
    cursor: pointer;
  }
  button:hover,
  button:active {
    background-color: darkgrey;
    border-color: purple;
  }
  </style>
  