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

                  <v-alert
                    v-model="checkLogin" 
                    type="error"
                    dismissible
                  >Username or Password is incorrect</v-alert>                 

                  <v-btn
                    @click="userLogin()"
                    
                    class="mt-4"
                    color="primary"
                    value="log in"
                    >Login</v-btn
                  >
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
import { lvm } from "../view-model/login-viewmodel";

@Component
export default class LoginForm extends Vue {
  username = "";
  password = "";
  checkLogin = false 

  userLogin() {
    this.checkLogin = lvm.check
    lvm.login(this.username, this.password);
  }
}
</script>

