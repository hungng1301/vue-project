<template>
  <v-container class="grey lighten-5">
    <h3>Top Employees</h3>
    <v-container class="grey lighten-5">
      <!-- Columns are always 50% wide, on mobile and desktop -->
      <v-row>
        <v-col
          class="grey lighten-5"
          cols="12"
          xl="3" lg="3" md="4" sm="6" xs="2"
          v-for="e in top10"
          :key="e.id"
        >
          <v-card class="rounded-md card mx-auto mb-auto">
            <v-card-title style="font-size: 15px">Name: {{ e.name }} <br /> </v-card-title>
            <v-card-title style="font-size: 15px">Age: {{ e.age }} <br /> </v-card-title>
            <v-card-title style="font-size: 15px">Salary: {{ e.salary }} <br /> </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <h3>Top Salary</h3>
    <v-container>
      <v-row>
        <v-col
          class="grey lighten-5"
          cols="12"
          xl="3" lg="3" md="4" sm="6" xs="2"
          v-for="e in employeeListOfDepartment"
          :key="e.id"
        >
          <!-- <v-row class="pa-5 flex-row" outlined tile> -->
          <v-card class="rounded-md card mx-auto mb-auto">
            <v-card-title style="font-size: 15px">Name: {{ e.name }}</v-card-title>
            <v-card-title style="font-size: 15px">Age: {{ e.age }}</v-card-title>
            <v-card-title style="font-size: 15px">Salary: {{ e.salary }}</v-card-title>
          </v-card>
          <!-- </v-row> -->
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Employee from "../model/Employee";
import Department from "../model/Department";
import { evm } from "../view-model/employee-viewmodel";
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
    evm.getTopEmployee();
    this.top10 = evm.top10;
  }

  getEmployeesFromHighestSalaryDepartment() {
    evm.getEmployeesFromHighestSalaryDepartment();
    this.employeeListOfDepartment = evm.employeeListOfDepartment;
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
}
</style>

