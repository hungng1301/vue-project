<template>
  <v-container >
    <!-- <v-card color="grey lighten-4" flex> -->
      <!-- <v-system-bar color="white"></v-system-bar> -->
      <v-toolbar height="100">
        <router-link :to="{ name: 'main' }">
          <v-img src="../assets/logo.png" max-width="80" max-height="80" />
        </router-link>

        <v-toolbar-title>VUEJS</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">
              <v-icon class="ma-5">mdi-account-circle</v-icon>
              Hello {{ getSession }}
              <v-icon> mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title>
                <router-link v-if="!getSession" :to="{ name: 'login' }">
                  <v-icon class="ma-5">mdi-login</v-icon>
                  <span>Login</span>
                </router-link>
                <router-link v-else :to="{ name: 'login' }">
                  <v-icon class="ma-5">mdi-logout</v-icon>
                  <span @click="logout()">Logout</span>
                </router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
    <!-- </v-card> -->
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Login from "../components/LoginForm.vue";

@Component
export default class HeaderBar extends Vue {
  getSession = localStorage.getItem("CurAcc");
  model = "";

  logout() {
    localStorage.removeItem("CurAcc");
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>