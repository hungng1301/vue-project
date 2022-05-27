<template>
  <v-main class="grey lighten-5">
    <v-container class="grey lighten-5">
      <v-card>
        <v-card-title>
          Employees
          <v-spacer></v-spacer>
          <v-autocomplete
            v-model="searchInput"
            :items="departmentList"
            item-text="name"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-autocomplete>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="empListFound.length == 0 ? employeesList : empListFound"
          class="elevation-1"
          @click:row="getEmployeeById"
        >
        </v-data-table>
      </v-card>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { observe } from "mobx";
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import DepartmentStore from "../model/Department";
import Department, { dep } from "../model/Department";
import Employee from "../model/Employee";

@Component
export default class Employees extends Vue{
  @Prop(Array) readonly employeesList!: Employee[];
  departmentList: Department[] = [];
  depListFound: Department[] = [];
  empListFound: Employee[] = [];

  searchInput = "";

  headers: any[] = [
    { text: "ID", value: "id" },
    { text: "Employee Name", value: "name" },
    { text: "Age", value: "age" },
    { text: "Salary", value: "salary" },
    { text: "Derpartment", value: "departmentId" },
  ];

  created() {
    this.departmentList = dep.departmentList;
  }

  getEmployeeById(rowEmp: any) {
    this.$router.push("/employee/" + rowEmp.id);
  }

  @Watch("searchInput")
  search() {
    if (this.searchInput !== null) {
      var searchId = 0;
      this.depListFound = this.departmentList.filter((dep) =>
        dep.name.includes(this.searchInput)
      );
      this.depListFound.map((dep) => {
        searchId = dep.id;
        this.empListFound = this.employeesList.filter(
          (emp) => emp.departmentId == searchId
        );
        return this.empListFound;
      });
    } else {
      this.empListFound.length = 0;
    }
  }
}
</script>