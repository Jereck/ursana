<template>
  <v-app>
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
  },
  created () {
    this.$vuetify.theme.dark = false
  },
}
</script>
