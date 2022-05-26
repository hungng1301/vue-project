<template>
  <v-app>
    <!-- <home-page></home-page> -->
    <v-main transition="slide-x-transition">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
// import HomePage from "./views/HomeView.vue";
import { Vue, Component } from "vue-property-decorator"; 

@Component
export default class App extends Vue {
} 
// export default {
//   name: "App",
//   components: {
//    // HomePage,
//   },
// };
</script>

<style>
</style>
