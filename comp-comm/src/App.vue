<template>
  <div id="app">
    <!-- <div class="container"> -->

   <!-- {{ msg }}
   <hr>
   <home-comp></home-comp> -->

   <header1></header1>
   <hr>

  <div class="row">

   <servers></servers>
      <serverDetails></serverDetails>


  </div>
   <hr>


      <footer1></footer1>



  </div>

</template>

<script>
import ServerDetails from './components/server/ServerDetails.vue';
import Servers from './components/server/Server';
import Footer from './components/shared/footer';
import Header from './components/shared/header';




export default {
  // name: 'app',
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App',
  //     Status: "Running"
  //   }
  // }

  components:{
    header1: Header,
    footer1: Footer,
    servers: Servers,
    serverDetails: ServerDetails
  }

}
</script>

<style>

</style>
