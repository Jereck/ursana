<template>
  <v-content>
      <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
              <v-col cols="12" sm="8" md="4">
                  <v-card elevation="12">
                      <v-toolbar color="primary" dark flat>
                          <v-toolbar-title>Login</v-toolbar-title>
                      </v-toolbar>
                      <v-card-text>
                          <v-form>
                              <v-text-field label="Login" name="login" type="text"></v-text-field>
                              <v-text-field id="password" label="Password" name="password" type="password"></v-text-field>
                          </v-form>
                      </v-card-text>
                      <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="primary">Login</v-btn>
                      </v-card-actions>
                  </v-card>
              </v-col>
          </v-row>
      </v-container>
  </v-content>
</template>

<script>
export default {

}
</script>

<style>

</style>