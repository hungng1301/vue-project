<template>
  <v-app>
    <v-main transition="slide-x-transition">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"; 

@Component
export default class App extends Vue {
} 
</script>

<style>
</style>
