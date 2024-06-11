<template>
    <div>
    <h1>The Project Page</h1>

<hr>
<router-view></router-view>
<button class="btn btn-primary" @click="navigate">home</button>

</div>
</template>
 
<script>
export default{
    methods:{
        navigate(){
            this.$router.push({name:'home'})
        }
    }
}
</script>