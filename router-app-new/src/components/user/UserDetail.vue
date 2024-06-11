<template>
    <div>
    <h3>Some User Details</h3>
    <p> User loaded with: {{ $route.params.id }}</p>
    <!-- <router-link
    tag="button"
    :to="'/user/'  +$route.params.id + '/edit'">
        Edit User
    </router-link> -->

    <!-- : is shorthand for bind in :to property
    in Vue.js, any attribute prefixed with a colon (:) -->
    
    <!--
    is shorthand for v-bind. This shorthand is used to
    dynamically bind the attribute to a JavaScript expression
    or data property.
    -->

    

    <router-link
    tag="button"
    :to="{name: 'userEdit', params:{id:$route.params.id},
    query:{locale: 'en',q:200}


}">
        Edit User
    </router-link>

    <hr />

    <button class="btn btn-warning" @click="backToMain">Back to Users List</button>
    

</div>
</template>


<script>
    export default {

        methods:{
            backToMain(){
                this.$router.push('/user')

            }
        }
    }
</script>

<style scoped>

</style>
