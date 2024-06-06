
<template>
    <div>
      <li>
        <h2>{{ users.name }}</h2>
        <button @click="toggleDetails">Show Details</button>
        <ul v-if="detailsAreVisible">
          <li><strong>Email:</strong> {{ users.email }}</li>
          <li><strong>City:</strong> {{ users.city }}</li>
        </ul>
      </li>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        detailsAreVisible: false,
        users: {
          id: "sonal",
          name: "sonal singh",
          email: "sonal@mail.com",
          city: "mumbai",
        },
      };
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
    },
  };
  </script>
  
  <style scoped></style>
  