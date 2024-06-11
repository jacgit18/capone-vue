import axios from 'axios';
import { createApp } from 'vue';
import App from './App.vue';
import BaseButton from './shared/BaseButton.vue';
import BaseCard from './shared/BaseCard.vue';


const app = createApp(App)

app.config.globalProperties.$axios=axios // can proably
// axios.defaults.baseURL='https://capone-62225-default-rtdb.firebaseio.com/survey.json'; // API
axios.defaults.baseURL='http://localhost:4000'; // backend




app.component('base-card', BaseCard)
app.component('base-button', BaseButton)

//interceptors
axios.interceptors.request.use((config)=>{
    console.log(config);
    return config
})

// This data isnt defined in the  frontend so nothing will new will render
axios.interceptors.response.use((response) => {
    const modifiedData = { users: { title: 'admin', email: 'admin@mail.com' } };
    console.log("STUFF ",modifiedData);  // Log the modified data
    response.data = modifiedData;  // Modify the response data
    return response;
});




app.mount('#app')

