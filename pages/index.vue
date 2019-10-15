<template>
  <div>
    <v-card class="my-2 pa-2" max-width="400" color="grey lighten-1">
      <v-card-title>New</v-card-title>
      <div tile v-for="(task, i) in tasks" :key="i">
        <v-card class="mx-auto my-2" >
          <v-card-text>{{ task.taskname }}</v-card-text>
        </v-card>
      </div>
    </v-card>
    <v-card class="my-2 pa-2" max-width="400" color="grey lighten-1">
      <v-card-title>Active</v-card-title>
      <div tile v-for="(task, i) in tasks" :key="i">
        <v-card class="mx-auto my-2" >
          <v-card-text>{{ task.taskname }}</v-card-text>
        </v-card>
      </div>
    </v-card>
  </div>
</template>

<script>
import { fireDb } from '~/plugins/firebase.js';

export default {
  data: () => ({
    taskname: null,
    tasks: [],
  }),
  mounted() {
    this.getTasks();
  },
  methods: {
    async getTasks(){
      let snapshot = await fireDb.collection("tasks").get();
      let tasks = []
      snapshot.forEach(doc => {
        let appData = doc.data();
        appData.id = doc.id;
        tasks.push(appData);
      })
      this.tasks = tasks;
    }
  }
}
</script>

<style scoped>

</style>