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
              <div align="center" justify="center">
                Name: {{ e.name }}
              </div>
              <div align="center" justify="center">
                Age: {{ e.age }}
              </div>
              <div align="center" justify="center">
                Salary: {{ e.salary }}
              </div>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col class="grey lighten-5" cols="12" xl="6" lg="8" md="8" sm="8">
          <h3>Top salary</h3>
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
              <div align="center" justify="center">
                Name: {{ ed.name }}
              </div>
              <div align="center" justify="center">
                Age: {{ ed.age }}
              </div>
              <div align="center" justify="center">
                Salary: {{ ed.salary }}
              </div>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Employee from "../model/Employee";
import Department, { dep } from "../model/Department";

@Component
export default class MainContent extends Vue {
  @Prop(Array) readonly employeesList: Employee[] = [];

  top10: Employee[] = [];
  employeeListOfDepartment: Employee[] = [];

  departmentList: Department[] = [];
  departmentWithSalary: Department[] = [];

  created() {
    this.getTopEmployees();
    this.getEmployeesFromHighestSalaryDepartment();
  }

  getTopEmployees() {
    this.top10 = this.employeesList
      .sort((a, b) => b.salary - a.salary)
      .slice(0, 10);
  }

  getEmployeesFromHighestSalaryDepartment() {

    this.departmentList = dep;
    this.employeeListOfDepartment = this.employeesList;

    var hightSalary = 0;
    var hightdepId = 0;
    this.departmentList.map((dep) => {
      const totalSalary = this.employeeListOfDepartment
        .filter((emp) => emp.departmentId == dep.id)
        .reduce(function (sum, value) {
          return sum + value.salary;
        }, 0);
      if (hightSalary < totalSalary) {
        (hightSalary = totalSalary), (hightdepId = dep.id);
      }
    });
    this.employeeListOfDepartment = this.employeeListOfDepartment.filter(
      (emp) => emp.departmentId == hightdepId
    );
    return this.employeeListOfDepartment;
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
}
</style>

