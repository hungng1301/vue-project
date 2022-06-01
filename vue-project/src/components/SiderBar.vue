<template>
  <div>
    <v-card class="d-none d-md-flex" flat>
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
              <v-list-item-title class="">Employee List</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>
    </v-card>

    <v-navigation-drawer v-model="show" absolute temporary>
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
            <v-list-item-title class="">Employee List</v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import MainContent from "../components/MainContent.vue";
import { bus } from "../main";

@Component({
  components: {
    MainContent,
  },
})
export default class Siderbar extends Vue {
  show = null;
  created() {
    bus.$on("showSider", (s: any) => {
      this.show = s
    });
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>