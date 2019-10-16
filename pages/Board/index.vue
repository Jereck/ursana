<template>
  <div>
    <v-card class="my-2 pa-2" max-width="400" elevation="6">
      <v-card-title>New</v-card-title>
      <draggable>
        <transition-group type="transition">
          <div tile v-for="(task, i) in tasks" :key="i">
              <v-card class="mx-auto my-2" elevation="3">
                <v-card-text>{{ task.name }}</v-card-text>
              </v-card>
          </div>
        </transition-group>
      </draggable>
      <v-btn color="primary" class="mr-4" @click="dialog = true" dark>New Task</v-btn>
    </v-card>

    <!-- Add Event Dialog -->
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-container>
          <v-form @submit.prevent="addEvent">
            <v-text-field v-model="name" type="text" label="Task Name (required)"></v-text-field>
            <v-text-field v-model="details" type="text" label="Task Details"></v-text-field>
            <v-text-field v-model="start" type="date" label="Start (required)"></v-text-field>
            <v-text-field v-model="end" type="date" label="End (required)"></v-text-field>
            <v-text-field v-model="color" type="color" label="Color (click to open color menu)"></v-text-field>
            <v-btn type="submit" color="primary" class="mr-4" @click.stop="dialog=false">
              Create Task
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { fireDb } from '~/plugins/firebase.js';
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },
  data: () => ({
    name: null,
    tasks: [],
    end: null,
    color: "#1976D2",
    dialog: false
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
    },
    async addEvent(){
      if(this.name && this.start){
        await fireDb.collection('tasks').doc(this.name).set({
          name: this.name,
          details: this.details,
          start: this.start,
          end: this.end,
          color: this.color
        });
        this.getTasks();
        this.name="";
        this.details="";
        this.start="";
        this.end="";
        this.color="";
      } else {
        alert('Name and start date are required!')
      }
    },
  }
}
</script>

<style>

</style>
