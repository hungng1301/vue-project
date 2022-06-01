<template>
  <v-container>
    <v-footer padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="l in links"
          :key="l"
          color="black"
          text
          rounded
          class="my-2"
        >
          {{ l }}
        </v-btn>
        <v-col class="py-4 text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>VUEJS</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class FooterBar extends Vue {
  links: any[] = ["Home", "Employee"];
}
</script>