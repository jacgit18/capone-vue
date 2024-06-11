<template>
  <form @submit.prevent="addTask">
    <input type="text" placeholder="Enter the Task" v-model="myNewTask" />
    <button>Add Task</button>
  </form>
</template>

<script>
import { useTaskStore } from "@/stores/TaskStore";
import { ref } from "vue";
export default {
  setup() {
    const taskStore = useTaskStore();
    const myNewTask = ref("");

    const addTask = () => {
      if (myNewTask.value.length > 0) {
        taskStore.addUserTasks({
          title: myNewTask.value,
          isFav: false,
          id: Math.floor(Math.random() * 10000),
        });
        myNewTask.value = "";
      }
    };
    return { addTask, myNewTask };
  },
};
</script>

<style scoped></style>
