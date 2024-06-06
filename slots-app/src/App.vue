
<template>
  <!-- <div class="container">
    <div class="row">
      <user-comment>
        <div slot="register">
          <p>User Registration</p>
          userName:<input type="text" /> password:<input type="password" />
          <button>Register</button>
        </div>
        <p slot="sl2">Another comment</p>
      </user-comment>
    </div>

    <user-comment>
      <template #login>
        <p>Login</p>
      </template>
    </user-comment>

    <hr />
   -->

  <div>

    <button @click="selectedComponent='user-comment'">Comments</button>
    <button @click="selectedComponent='appAuthor'">Author</button>
    <button @click="selectedComponent='appNew'">New</button>
    <button @click="selectedComponent='userForm'">UserForm</button>

 
<div>
  <p>{{ selectedComponent }}</p>
  <keep-alive>
    <component :is="selectedComponent">  </component>
  </keep-alive>



</div>
    <hr>
   <!--  <formHelper>
      <template #header>
         <p>User Registration Form</p>
      </template>
      <template #title>
         <p>Register the New User</p>
      </template>
      <template #body>
       <form>
        UserName:<input type="text" placeholder="Enter Name"/>
        Password:<input type="password" placeholder="Enter password"/>
        Email:<input type="text" placeholder="Enter Email"/>
        <button class="btn btn-primary">Register</button>
       </form>
      </template>
    </formHelper> -->
  </div>
</template>

<script>
import Author from "./components/Author.vue";
import Comments from "./components/Comments.vue";
import FormHelper from "./components/FormHelper.vue";
import NewApp from "./components/NewApp.vue";
import UserForm from "./components/UserForm.vue";

export default {
  components: {
    "user-comment": Comments,
    formHelper:FormHelper,
    appAuthor:Author,
    appNew:NewApp,
    userForm:UserForm
  },
  data() {
    return {
      userComment: "its wonderful",
      selectedComponent:'user-comment'
    };
  },
};
</script>

<style>
p {
  color: green;
}
</style>
