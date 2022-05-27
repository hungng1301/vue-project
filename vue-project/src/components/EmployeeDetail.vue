<template>
  <v-main class="grey lighten-2">
    <v-container class="grey lighten-5">
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8" lg="8">
          <v-card ref="form">
            <v-card-text>
              <v-text-field
                v-model="id"
                label="ID"
                placeholder=""
                disabled
              ></v-text-field>

              <v-text-field
                v-model="name"
                label="Full name"
                placeholder=""
                required
              ></v-text-field>

              <v-text-field
                v-model="age"
                label="Age"
                placeholder=""
                required
              ></v-text-field>

              <v-text-field
                v-model="salary"
                label="Salary"
                required
                placeholder=""
              ></v-text-field>

              <v-text-field
                v-model="departmentId"
                label="Department ID"
                required
                placeholder=""
              ></v-text-field>
            </v-card-text>
            <v-divider class="mt-12"></v-divider>
            <v-card-actions>
              <router-link :to="{ name: 'employee' }">
                <v-btn text> Cancel </v-btn>
              </router-link>

              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="updateEmployee()">
                Update
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from "vue-property-decorator";
import Employee, { emp } from "../model/Employee";

@Component
export default class EmployeeDetail extends Vue {
  @Prop(Array) readonly employeesList: Employee[] = [];

  id = 0;
  name = "";
  age = 0;
  salary = 0;
  departmentId = 0;

  created() {
    var pId = parseInt(this.$route.params.id);
    var CurEmp = this.employeesList.find((emp) => emp.id === pId);

    this.id = CurEmp!.id;
    this.name = CurEmp!.name;
    this.age = CurEmp!.age;
    this.salary = CurEmp!.salary;
    this.departmentId = CurEmp!.departmentId;
  }

  @Emit("reloadEmpList")
  updateEmployee() {
    const CurEmp : Employee = {
      id : this.id,
      name : this.name,
      age : this.age,
      salary : this.salary,
      departmentId : this.departmentId
    }

    if (this.name && this.age && this.salary && this.departmentId) {
      if (this.age > 20) {
        const e = emp.find((em) => em.id == CurEmp.id) as Employee;
        e.name = CurEmp.name;
        e.age = CurEmp.age;
        e.salary = CurEmp.salary;
        e.departmentId = CurEmp.departmentId;
      
        alert("Update Successfully");
        this.$router.push("/employee");
        return emp;
      } else {
        alert("Age must be older than 20");
      }
    } else {
      alert("You must fill all text-field");
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
