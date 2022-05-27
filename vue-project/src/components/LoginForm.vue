<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card>
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <form>
                  <v-text-field
                    v-model="username"
                    name="username"
                    label="Username"
                    type="text"
                    placeholder="username"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="password"
                    required
                  ></v-text-field>
                  <!-- <router-link :to="{name: 'home'}"> -->
                  <v-btn
                    v-on:click="login()"
                    type="submit"
                    class="mt-4"
                    color="primary"
                    value="log in"
                    >Login</v-btn
                  >
                  <!-- </router-link> -->
                </form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import VueRouter, { Route } from 'vue-router'

@Component
export default class LoginForm extends Vue {
  username = "";
  password = "";
  // checkLogin = false

  login() {
    if (this.username != "" && this.password != "") {
      if (this.username == "admin" && this.password == "admin") {
        sessionStorage.setItem("CurAcc", this.username);
        // this.checkLogin = true
        this.$router.replace({ name: "main" });
      } else {
        alert("Username or Password is incorrect")
      }
    }
  }
}
</script>

