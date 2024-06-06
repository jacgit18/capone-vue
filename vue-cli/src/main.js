import Vue from 'vue';
import App from './App.vue';
// import Home from './Home.vue'

// Vue.component('home-comp',
//   Home
// )


export const eventBus = new Vue();


new Vue({
  el: '#app',
  render: h => h(App)
})


