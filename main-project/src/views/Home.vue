<template>
  <div class="p-8 pb-0 text-orange-300">

    <h1 class="text-4x1 font-bold mb-4 text-orange-500"> Random Meals</h1>

    </div>

    <Meals :meals="meals"/>

</template>

<script setup>
// import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
// import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
import store from "../store";
import { axiosClient } from "../axiosClient.js";


const meals = ref([])
onMounted(async() => {
  for(let i=0; i<10; i++){
    axiosClient.get('random.php').then(({data})=> meals.value.push(data.meals[0]))
  }
})


// const route = useRoute();

// const meals = computed(() => store.state.dispMeal);

// function displayMeal() {
//     store.dispatch("displayMeals", keyword.value);
// }
// onMounted(() => {

//     displayMeal();
  
// });


</script>

<style scoped></style>
