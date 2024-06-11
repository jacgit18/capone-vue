<template>
    <div>
        <p>Please select a User</p>
        <input type="text" v-model="searchTerm" placeholder="Search User "/>

        <hr>
        <ul class="list-group">

            <router-link 
            v-for="user in filteredUsers"
            key="user.id"
            tag="li"
            to="/user/${user.id}"
            class="list-group-item"
            style="cursor: pointer;"
            >
            {{ user.name }}
            </router-link>

            <!-- <router-link 
            tag="li"
            to="/user/1"
            class="list-group-item"
            style="cursor: pointer;"
            >
            User1
            </router-link> -->

<!-- 
            <router-link 
            tag="li"
            to="/user/2"
            class="list-group-item"
            style="cursor: pointer;"
            >
            User2
            </router-link>

            <router-link 
            tag="li"
            to="/user/3"
            class="list-group-item"
            style="cursor: pointer;"
            >
            User3
            </router-link> -->


            <!-- <li class="list-group-item" style="cursor: pointer">User 1</li>
            <li class="list-group-item" style="cursor: pointer">User 2</li>
            <li class="list-group-item" style="cursor: pointer">User 3</li> -->
        </ul>
    </div>
</template>


<script>

    export default {
        data(){
            return {
                searchTerm: '',
                users:[
                    {id: 1, name:'Manager'},
                    {id: 2, name:'Data'},
                    {id: 3, name:'Finance'},
                    {id: 4, name:'QA'},

                ]
            
            }

        },
        computed:{
            filteredUsers(){
                return this.users.filter(user =>
                    user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
                )
            }

        }



    }
   
    

</script>

<style>
</style>
