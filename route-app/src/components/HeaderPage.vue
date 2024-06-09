<template>
  <div>
    <ul class="nav nav-pills">
      <li role="presentation"><router-link to="/">Home</router-link></li>
      <li role="presentation"><router-link to="/user/10">User</router-link></li>
      <!-- <router-link to ="/" tag="li" active-class="active" exact><a>Home</a></router-link>
            <router-link to ="/user" tag="li" active-class="active"><a>User</a></router-link> -->

      <!-- <router-link to="/" v-slot="{ href, navigate, isActive, isExactActive }">
          <li :class="{ active: isActive, 'exact-active': isExactActive }">
            <a :href="href" @click="navigate">Home</a>
          </li>
        </router-link>
        <router-link to="/user/10" v-slot="{ href, navigate, isActive }">
          <li :class="{ active: isActive }">
            <a :href="href" @click="navigate">User</a>
          </li>
        </router-link> -->
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Add styles as needed, for example: */
.active {
  /* styles for active link */
}
.exact-active {
  /* styles for exactly active link */
}
</style>
