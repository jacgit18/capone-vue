<template>
  <div>
    <header>
      <img src="https://pinia.vuejs.org/logo.svg" alt="" srcset="" />
      <h1>My Personal Task Manager for {{ taskStore.name }}</h1>
    </header>
    <div class="user-form">
      <UserForm/>
    </div>

    <nav class="filter">
      <button @click="filter = 'all'">Show All Tasks</button>
      <button @click="filter = 'favs'">Show Fav Tasks</button>
    </nav>

    <div class="task-list" v-if="filter === 'all'">
      <p>My pending Tasks : {{ taskStore.totalTaskCount }}</p>
      <div v-for="task in taskStore.mytasks" v-bind:key="task.title">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>My favorite Tasks : {{ taskStore.favCount }}</p>
      <div v-for="task in taskStore.favs" v-bind:key="task.title">
        <TaskDetails :task="task" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useTaskStore } from "./stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
import UserForm from "./components/UserForm.vue";
export default {
  components: {
    TaskDetails,
    UserForm
  },
  setup() {
    const taskStore = useTaskStore();

    taskStore.loadTasks()

    const filter = ref("all");
    return { taskStore, filter };
  },
};
</script>

<style scoped></style>
