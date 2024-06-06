<template>
  <div>
    <header><h1>User Details</h1></header>
    <ul>
      <user-contact></user-contact>
      <user-contact></user-contact>
    </ul>
  </div>
</template>

<script>
import UserContacts from "./components/UserContacts.vue";

export default {
  components: {
    "user-contact": UserContacts,
  },
};
</script>

<style >
*{
  box-sizing: border-box;
}
body{
  margin: 0;
}
header{
  box-shadow: 0 2px 8px blue;
}
 ul{

  margin: 0;
  padding: 0;
  list-style: none;
}
</style>