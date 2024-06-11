
 import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

Vue.filter('to-lowercase',function(value){
    return value.toLowerCase()
})

Vue.directive('highlight',{
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
})


Vue.use(VueRouter)
const router=new VueRouter({
    
    routes,
    mode:'history'
})
new Vue({
    el:'#app',
    router,
    render:h =>h(App)
})