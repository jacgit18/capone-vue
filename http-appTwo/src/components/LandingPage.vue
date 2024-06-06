<template>

   <section>
    <base-card>
<h2>User shoop feed</h2>
<div>

    <base-button>Load all feedback</base-button>
</div>


<ul>
    <surveyResults v-for="result in results" :key="result.id" :name="result.name"
    
    :rating="result.rating">

    </surveyResults>
</ul>
</base-card>


   </section>
  </template>
  
  <script>
import ResultsApp from './ResultsApp.vue';
  
  export default {
   
    data(){
      return {
        results:[],
      }
    },
    methods:{
      loadFeedbacks(){
        const url = 'https://capone-62225-default-rtdb.firebaseio.com/survey.json';

        fetch(url).then((response)=>{
              return response.json();
            })
      }
    },
    mounted() {
      this.loadFeedbacks()
    },
    components:{
        'surveyResults': ResultsApp,
    }
       
  };
  </script>
  
  <style scoped>
li{
    margin: 1em 0;
    border: 1px solid salmon;
    padding: 1rem;
}

.highlight{
font-weight: bold;
}


.rating--poor{
    color: red;
}

.rating--average{
    color: darkblue;
}

.rating--great{
    color: green;
}
</style>
  