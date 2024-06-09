<template>
<div class="container">
<headerMain></headerMain>
<hr>
  <router-view></router-view>

</div>
  

</template>

<script>
import HeaderPage from './components/HeaderPage.vue';

export default {
  components:{
    headerMain: HeaderPage
  }

}
</script>

<style scoped>

</style>
