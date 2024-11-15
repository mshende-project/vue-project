<script>
// example of options API
export default {
  data() {
    return {
      name: "John doe",
      status: "pending",
      tasks: ["Task1", "Task2", "Task3"],
      website: "http://google.com",
    };
  },
  methods: {
    toggleStatus() {
      if (this.status === "active") {
        this.status = "pending";
      } else if (this.status === "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    },
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
