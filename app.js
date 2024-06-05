
var vm1=new Vue({
    el: '#app',
    data:{
        title:'The vue App',
        showPara:false
    },
    methods: {
        show:function(){
            this.showPara=true
            this.updateTitle('the new updated title (Updated.....!)')
            this.$refs.mb.innerText='test123'
        },
        updateTitle:function(title){
            this.title=title
        }
    },
    computed:{
        lowercaseTitle:function(){
            console.log('computed called');
            return this.title.toLowerCase()
        }
    },
    watch:{
        title:function(value){
            alert('Title changed....!  '+value )

        }
    }
})



setTimeout(function(){
    vm1.title='changed by timer'
},3000)

var vm2=new Vue({
    el: '#app2',

    data:{
        title:"welcome to another instance"
    },
    methods:{
        onChange:function(){
            vm1.title='changed by Vm2'
        }
    }

})