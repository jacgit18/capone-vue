import Header from './components/Header.vue'
import Home from './components/Home.vue'
import ProjectEdit from './components/projects/ProjectEdit.vue'
import ProjectsDetail from './components/projects/ProjectsDetail.vue'
import ProjectPage from './components/projects/ProjectsPage.vue'
import ProjectStart from './components/projects/ProjectStart.vue'
import User from './components/user/User.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
import UserStart from './components/user/UserStart.vue'


export  const routes=[
    {path:'' , name:'home', components: {
        default: Home, 'header-top':Header
    }},
    
    {path:'/user', components:{
        default: User, 'header-bottom':Header
    },
        
        children:[
        {path:'', component:UserStart},
        {path:':id', component:UserDetail},
        {path:':id/edit', component:UserEdit, name:'userEdit'}
    ]
},
{path:'/project', components:{default: ProjectPage, 'project': ProjectPage}, name:'project'

    ,children:[
        {path:'', component:ProjectStart},
        {path:':id', component:ProjectsDetail,  name: 'projectDetail'},
        {path:':id/edit', component:ProjectEdit},
    ]
},

{path:'/takemenowhere', redirect: {name: 'home'} },
{path:'*', redirect:'/' }


]