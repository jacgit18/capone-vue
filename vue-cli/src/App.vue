<template>
  <div id="app">
   <!-- {{ msg }}
   <hr>
   <home-comp></home-comp> -->

   <header></header>
   <footer></footer>
   <servers></servers>
   <serverDetails></serverDetails>


  </div>

</template>

<script>
import ServerDetails from './components/server/ServerDetails.vue';
import Servers from './components/server/Server';
import Footer from './components/shared/footer';
import Header from './components/shared/header';




export default {
  name: 'app',
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App',
  //     Status: "Running"
  //   }
  // }

  components:{
    header: Header,
    footer: Footer,
    servers: Servers,
    serverDetails: ServerDetails
  }

}
</script>

<style>

</style>
