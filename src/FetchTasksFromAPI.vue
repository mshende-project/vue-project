<script setup>
// example of composition API
import { ref, onMounted } from "vue"; // use ref from vue

const name = ref("John doe");
const status = ref("active");
// const tasks = ref(["Task1", "Task2", "Task3"]);
const tasks = ref([]); // fetch tasks from api
const newTask = ref("");

const toggleStatus = () => {
  // when you use ref you have to use status.value and so on
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

onMounted(async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((result) => result.json())
      .then((json) => json);
    tasks.value = response.map((item) => item.title);
  } catch (error) {
    console.log("Error fetching tasks");
  }
});
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status == 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else="status">User is inactive</p>

  <!-- if you use .prevent on @submit.prevent you dont have to write e.preventDefault()  
  in the function to prevent default behavior -->
  <form @submit.prevent="addTask">
    <label for="newTak">Add task : </label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">X</button>
    </li>
  </ul>
  <!-- <a v-bind:href="website">Click for google</a> -->
  <!-- Update - v-bind:href is longer to add link -->
  <a :href="website">Click for Google</a>

  <!-- Below both works same v-on:click & @click -->
  <!-- <button v-on:click="toggleStatus">Change status</button> -->
  <button @click="toggleStatus">Change status</button>
</template>
