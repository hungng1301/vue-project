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
          sort-by="id"
          class="elevation-1"
          @click:row="getEmployeeById"
          hide-default-footer
          :page.sync="page"
          :items-per-page="itemsPerPage"
          @page-count="pageCount = $event"
        >
        </v-data-table>
      </v-card>
      <div class="pt-3">
        <v-pagination v-model="page" :length="pageCount"> </v-pagination>
      </div>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { observer } from "mobx-vue";
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import Department, { dep } from "../model/Department";
import Employee from "../model/Employee";

@observer
@Component
export default class Employees extends Vue {
  @Prop(Array) readonly employeesList!: Employee[];
  departmentList: Department[] = [];
  empListFound: Employee[] = [];

  searchInput = "";
  page = 1;
  itemsPerPage = 10;
  pageCount = 0;

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
  searchEmp() {
    dep.search(this.searchInput);
    this.empListFound = dep.empListFound;
  }
}
</script>