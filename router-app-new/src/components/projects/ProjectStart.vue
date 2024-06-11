<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">

            <router-link
            v-for="project in projects"
            :key="project.projectID"
            :to="'/project' + project.projectID" 
            class="list-group-item"
            style="cursor: pointer;"
            >
            {{ project.projectID }}
            </router-link>

        </ul>



    </div>
</template>


<script>
import { data } from './data';
    export default {
        data(){
            return {
                projects: data.projects
            }
        }
       
        }
    

</script>

<style>
</style>
