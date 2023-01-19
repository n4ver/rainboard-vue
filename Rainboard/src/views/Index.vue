<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import axios from "axios";
</script>

<script lang="ts">
export default {
  name: "App",
  data() {
    return {
      todos: [],
      description: "",
      title: "",
    };
  },
  async mounted() {
    const response = await axios.get("api/todoList/");
    this.todos = response.data;
  },
  methods: {
    async addTodo(e) {
      e.preventDefault();
      const response = await axios.post("api/todoList/", {
        title: this.title,
        description: this.description
      });
      this.todos.push(response.data);
      this.title = "";
      this.description = "";
    },
    async removeTodo(item, i) {
      await axios.delete("api/todoList/" + item._id);
      this.todos.splice(i, 1);
    },
  }
};
</script>

<template>
    <Header/>
    <main class="mb-auto">
        <div class="p-4 mx-auto max-w-screen-md text-center">
            <p class="my-6">
                THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
            </p>
        </div>
        <div class="main">
            <h3 class="mx-auto max-w-screen-md text-center">Todo List</h3>
            
            <form class="p-4 mx-auto max-w-screen-md text-center" >
                <input class="border" v-model="title" type="text" name="name" placeholder="Enter todo" />
                <br />
                <input class="border" v-model="description" type="text" name="description"  placeholder="Enter Description" />
                <br />
                <button class="border " @click="addTodo">Add Todo</button>
            </form>
            <div id="todo-container">
                <ul>
                <li v-for="(todo, i) in todos" :key="todo._id">
                    <div class="mx-auto max-w-screen-md text-center flex flex-col border">
                        <span class="flex flex-row mx-auto">{{ todo.title }}</span>
                        <span class="flex flex-row mx-auto break-words">{{ todo.description }}</span>
                    </div>
                    <div class="mx-auto max-w-screen-md text-center flex flex-col border">
                        <button class="mx-auto max-w-screen-md text-center flex flex-row" @click="removeTodo(todo, i)">DELETE TODO</button>
                    </div>
                </li>
                </ul>
            </div>
        </div>
    </main>
    <Footer/>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
