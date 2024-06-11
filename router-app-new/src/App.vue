<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr/>
                <p v-highlight:background.delayed="'red'"> {{udata | upper | to-lowercase }}</p>

                <!-- <app-header></app-header> -->
                <p>Persist accross router view because router view</p>
                <router-view name="header-top"></router-view>
                <router-view></router-view>
                <!-- <router-view name="project"></router-view> -->

                <router-view name="header-bottom"></router-view>


            </div>
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue';
    export default {
        data(){
            return {
                udata:'welcome to user DATA '
            }
        },
        filters:{
            upper(value){
                return value.toUpperCase()
            }

        },
        components:{
            appHeader:Header,
            directives:{
                'local-color':{
                    bind(el, binding){
                        var delay = 0
        if(binding.modifiers['delayed']){
            delay = 4000
        }
        setTimeout(()=>{

       

        if(binding.arg =='background'){
            el.style.backgroundColor=binding.value
        }else{
            el.style.color=binding.value
        }
    },delay)
    }
                    }
                }
            }
        }
    

</script>

<style>
</style>
