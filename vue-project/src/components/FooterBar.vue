<template>
  <v-container>
    <v-footer padless>
      <v-row justify="center" no-gutters>
        <router-link v-for="l in links" :key="l.title" :to="{ name: l.path }">
          <v-btn
            color="black"
            text
            rounded
            class="my-2"
          >
            {{ l.title }}
          </v-btn>
        </router-link>
        <v-col class="py-4 text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>VUEJS</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class FooterBar extends Vue {
  links: any[] = [
    { title: "Home", path: "main" },
    { title: "Employee", path: "employee" },
  ];
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>