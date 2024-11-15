<script>
// example of composition API
import { ref } from "vue"; // use ref from vue
export default {
  setup() {
    const name = ref("John doe");
    const status = ref("active");
    const tasks = ref(["Task1", "Task2", "Task3"]);

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

    return {
      name,
      status,
      tasks,
      toggleStatus,
    };
  },
};
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status == 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else="status">User is inactive</p>
  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <!-- <a v-bind:href="website">Click for google</a> -->
  <!-- Update - v-bind:href is longer to add link -->
  <a :href="website">Click for Google</a>

  <!-- Below both works same v-on:click & @click -->
  <!-- <button v-on:click="toggleStatus">Change status</button> -->
  <button @click="toggleStatus">Change status</button>
</template>
