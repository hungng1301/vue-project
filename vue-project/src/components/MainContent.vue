<template>
  <v-main class="grey lighten-5">
    <v-container class="grey lighten-5">
      <!-- Columns are always 50% wide, on mobile and desktop -->
      <v-row justify="center">
        <v-col class="grey lighten-5" cols="12" xl="6" lg="8" md="8" sm="8">
          <h3>Top Employees</h3>
          <v-row class="pa-5 flex-row" outlined tile>
            <v-card
              width="170"
              height="170"
              v-for="e in top10"
              :key="e.id"
              class="pa-7 rounded-md card lg-4 mx-2 mb-3"
              outlined
              tile
              align="center"
            >
              <div align="center" justify="center">Name: {{ e.name }}</div>
              <div align="center" justify="center">Age: {{ e.age }}</div>
              <div align="center" justify="center">Salary: {{ e.salary }}</div>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col class="grey lighten-5" cols="12" xl="6" lg="8" md="8" sm="8">
          <h3>Top Salary</h3>
          <v-row class="pa-5 flex-row" outlined tile>
            <v-card
              width="170"
              height="170"
              class="pa-7 rounded-md card lg-4 mx-2 mb-3 pa-2"
              outlined
              tile
              v-for="ed in employeeListOfDepartment"
              :key="ed.id"
            >
              <div align="center" justify="center">Name: {{ ed.name }}</div>
              <div align="center" justify="center">Age: {{ ed.age }}</div>
              <div align="center" justify="center">Salary: {{ ed.salary }}</div>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Employee, { emp } from "../model/Employee";
import Department, { dep } from "../model/Department";
import { observer } from "mobx-vue";

@observer
@Component
export default class MainContent extends Vue {
  @Prop(Array) readonly employeesList!: Employee[];

  top10: Employee[] = [];
  employeeListOfDepartment: Employee[] = [];
  departmentList: Department[] = [];

  created() {
    this.getTopEmployees();
    this.getEmployeesFromHighestSalaryDepartment();
  }

  getTopEmployees() {
    emp.getTopEmployee();
    this.top10 = emp.top10
  }

  getEmployeesFromHighestSalaryDepartment() {
    emp.getEmployeesFromHighestSalaryDepartment();
    this.employeeListOfDepartment = emp.employeeListOfDepartment
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
}
</style>

