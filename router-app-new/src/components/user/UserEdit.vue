<template>

    <div>

        <h3>Edit the User</h3>

        <p>Locale : {{ $route.query.locale }}  </p>
        <p>User Detail :  {{ $route.query.q }}  </p>


        <hr>
        <p>Directives Demo</p>

        <p v-highlight:background.delayed="'yellow'">Demo Text</p>
        <p> Another para</p>



    </div>
</template>