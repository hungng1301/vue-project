<template>
  <v-app>
    <header-bar></header-bar>
    <div style="display: flex;">
      <sider-bar></sider-bar>
      <router-view
        :employees-list="employeesList"
        @reloadEmpList="reloadEmpList"
      />
    </div>
    <footer-bar></footer-bar>
  </v-app>
</template>

<script lang="ts">
import HeaderBar from "../components/HeaderBar.vue";
import SiderBar from "../components/SiderBar.vue";
import FooterBar from "../components/FooterBar.vue";
import { Vue, Component } from "vue-property-decorator";
import Employee, { emp } from "../model/Employee";

@Component({
  components: {
    HeaderBar,
    SiderBar,
    FooterBar,
  },
})
export default class HomePage extends Vue {
  employeesList: Employee[] = [];

  created() {
    this.employeesList = emp.employeeList;
  }

  reloadEmpList(empList: any) {
    this.employeesList = empList;
  }
}
</script>

<style>
</style>

