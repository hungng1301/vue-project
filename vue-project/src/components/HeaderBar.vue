<template>
  <v-container>
    <v-toolbar flat>
      <v-app-bar-nav-icon
        class="d-flex d-lg-none d-xl-none d-md-none"
        @click.stop="showSider()"
      ></v-app-bar-nav-icon>

      <router-link :to="{ name: 'main' }">
        <v-img src="../assets/logo.png" max-width="70" max-height="70" />
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
                <span @click="userLogout()">Logout</span>
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { lvm } from "../view-model/login-viewmodel";
import { bus } from "../main";

@Component
export default class HeaderBar extends Vue {
  getSession = sessionStorage.getItem("CurAcc");
  drawer = false;
  model = "";

  showSider() {
    this.drawer = true;
    bus.$emit("showSider", this.drawer);
  }

  userLogout() {
    lvm.logout();
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>