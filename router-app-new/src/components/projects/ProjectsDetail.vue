<template>
    <div>
        <h3>Project Details for project {{id}}</h3>
        <p>Project Name  {{project.projectname}}</p>
        <p>Project Location  {{project.location}}</p>
        <p>Project Manager  {{project.managername}}</p>
  

        <router-link
        tag="button"
        v-for="user in filteredUsers"
        :key="user.id" 
        :to="{name: 'projectEdit', params:{id:id}}">
        Edit Project
        </router-link>

        <button class="btn btn-danager" @click="deleteProject"> Delete Project</button>
        <hr>
        <button class="btn btn-warning" @click="backToMain"> Back </button>


    </div>
</template>


<script>
import { data } from './data';

    export default {
        data(){
            return{
                id: this.$route.params.id,
                project: {}
            }
        },
        methods:{

        backToMain(){
            this.$router.push("/project")
        },

        deleteProject(){
            data.deleteProjectById(this.id)
            alert('Project deleted');
            this.backToMain();
        },

        fetchProjectDetail(){
            const project = data.getProjectById(this.id);
            if(project){
                this.project = project;
            }
        }

        }
       
        }
    

</script>

<style>
</style>
