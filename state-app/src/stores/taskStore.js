import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    mytasks: [],
    isLoading:false,
    name: "Amarjeet",
  }),
  getters: {
    favs() {
      return this.mytasks.filter((t) => t.isFav);
    },
    favCount() {
      return this.mytasks.reduce((a, b) => {
        return b.isFav ? a + 1 : a;
      }, 0);
    },
    totalTaskCount: (state) => {
      return state.mytasks.length;
    },
  },
  actions: {
    async loadTasks(){
  this.isLoading=true
  const res=await fetch('http://localhost:3000/tasks')
  const data=await res.json()
  this.mytasks=data
  this.isLoading=false
    },
    addUserTasks(task) {
      this.mytasks.push(task);
    },
    deleteTask(id) {
      this.mytasks = this.mytasks.filter((t) => {
        return t.id !== id;
      });
    },
    toggleMyFavTask(id) {
      const task = this.mytasks.find((t) => t.id === id);
      task.isFav = !task.isFav;
    },
  },
});
