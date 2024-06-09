import HomePage from './components/HomePage.vue'
import UserPage from './components/user/UserPage.vue'


export const routes = [
    {path:'', component: HomePage},
    {path:'/user/:id', component: UserPage}

]