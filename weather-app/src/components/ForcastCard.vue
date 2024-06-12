<template>
    <div class="forecast-card">
      <h3>{{ formatDate(forecast.dt_txt) }}</h3>
      <p>Temperature: {{ forecast.main.temp }} °F</p>
      <p>Weather: {{ forecast.weather[0].description }}</p>
      <p>High/Low: {{ forecast.main.temp_max }} / {{ forecast.main.temp_min }} °F</p>
    </div>
  </template>
  
  <script setup>
    
  const props = defineProps({
    forecast: Object
  })
  
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  </script>
  
  <style scoped>
  .forecast-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1em;
    margin: 0.5em;
    width: 200px;
    text-align: center;
  }
  </style>
  