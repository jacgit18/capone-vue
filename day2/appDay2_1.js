Vue.component('welcome', {
    template: '<h2> Demo Template </h2>'
});


// var vm3 = new Vue({
//     el: 'welcome',
//     template: "<h2> Demo Template  <h2>",
   
 
// });

// Reusable unlike part above
Vue.component('my-comp', {
    data: function(){
    return  {
        status: "Running"
    }
    },
    template: '<div><h2> Server Status {{status}} (<button  @click="changeStatus">change</button>)</h2></div>',
    methods:{
        changeStatus:function(){
            this.status= "Stopped"
        }
    }

    
});



var mydata = {
    title: 'Life Cycle Demo',
}

new Vue({
    el: "#app",
    data: mydata,

    beforeCreate(){
        console.log("called before create ")
    },
    Created(){
        console.log("created ")
    },
    beforeMount(){
        console.log("before mount ")
    },
    mounted(){
        console.log("mounted ")
    },
    beforeUpdate(){
        console.log("before update ")
    },
    updated(){
        console.log("updated ")
    },

    beforeDestroyed(){
        console.log("before destroyed ")
    },


    destroyed(){
        console.log("destroyed ")
    },

    methods: {
        destroy: function() {
           this.$destroy()
        },
       
    }


   
});

