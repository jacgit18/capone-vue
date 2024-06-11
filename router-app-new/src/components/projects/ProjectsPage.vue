<template>
    <div>
    <h1>The Project Page</h1>

<hr>
<button class="btn btn-primary" @click="navigate">home</button>
<router-view></router-view>

</div>
</template>
 
<script>
export default{
    methods:{
        navigate(){
            this.$router.push({name:'project'})
        }
    }
}
</script>