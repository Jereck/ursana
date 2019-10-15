<template>
  <v-app dark>
    <AppBar />
    <v-container>
      <v-content>
        <nuxt />
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import AppBar from '../components/AppBar';
export default {
  components: {
    AppBar
  }
}
</script>
