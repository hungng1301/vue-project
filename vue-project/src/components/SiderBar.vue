<template>
  <v-card class="d-flex">
    <v-navigation-drawer permanent>
      <v-list nav dense>
        <router-link :to="{ name: 'main' }">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="">Home</v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link :to="{ name: 'employee' }">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Employee List</v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import MainContent from "../components/MainContent.vue";

@Component({
  components: {
    MainContent,
  },
})
export default class Siderbar extends Vue {
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>