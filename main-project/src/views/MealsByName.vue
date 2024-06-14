<template>
    <div class="flex flex-col p-8">
      <input
        type="text"
        v-model="keyword"
        class="rounded-border-2 border-red-200 w-fill"
        placeholder="Search for todays menu"
        @change="searchMeals"
      />

  <div>
<pre> {{meals}} </pre>
    </div>

  </div>
</template>

<script setup>

import { axiosClient } from "../axiosClient.js";
import store  from "../store/index.js";

const keyword = ref('')
const meals = computed(()=> store.replaceState.searchMeals)

function searchMeals() {
  store.dispatch('searchMeals',keyword.value)
}

</script>

<style scoped></style>
