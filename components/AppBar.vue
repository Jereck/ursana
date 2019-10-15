<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>URSANA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/board">Board</v-btn>
        <v-btn text to="/calendar">Calendar</v-btn>
        <v-btn text to="/account">Account</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'AppBar'
}
</script>

<style>

</style>
