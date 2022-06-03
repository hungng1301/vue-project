<template>
  <v-container class="grey lighten-5">
    <v-alert v-if="checkSuccess==true" type="success" dismissible>
      Update Successfull
    </v-alert>
    <v-form v-model="valid" lazy-validation>
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
                :rules="Rules"
                required
              ></v-text-field>

              <v-text-field
                v-model="age"
                label="Age"
                placeholder=""
                required
                :rules="ageRules"
              ></v-text-field>

              <v-text-field
                v-model="salary"
                label="Salary"
                required
                placeholder=""
                :rules="Rules"
              ></v-text-field>

              <v-text-field
                v-model="departmentId"
                label="Department ID"
                required
                placeholder=""
                :rules="depRules"
              ></v-text-field>
            </v-card-text>
            <v-divider class="mt-12"></v-divider>
            <v-card-actions>
              <router-link :to="{ name: 'employee' }">
                <v-btn text> Back </v-btn>
              </router-link>

              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="update(), snackbar=true" :disabled="!valid">
                Update
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from "vue-property-decorator";
import Employee from "../model/Employee";
import {edvm} from "../view-model/empdetail-viewmodel"
import { observer } from "mobx-vue";

@observer
@Component
export default class EmployeeDetail extends Vue {
  @Prop() readonly employeesList!: Employee[];
  updateList: Employee[] = [];

  valid = true;
  checkSuccess = false;
  id = 0;
  name = "";
  age = 0;
  salary = 0;
  departmentId = 0;

  Rules: any[] = [(v: any) => !!v || "This field is required"];
  ageRules: any[] = [
    (v: any) => !!v || "Age is required",
    (v: any) => v > 20 || "Age must older than 20",
  ];
  depRules: any[] = [
    (v: any) => !!v || "Department ID is required",
    (v: any) => (v > 0 && v <= 3) || "Department ID are 1, 2, 3",
  ];

  created() {
    this.getEmp();
  }

  getEmp() {
    var pId = parseInt(this.$route.params.id);
    var CurEmp = edvm.getEmpById(pId);
    this.id = CurEmp!.id;
    this.name = CurEmp!.name;
    this.age = CurEmp!.age;
    this.salary = CurEmp!.salary;
    this.departmentId = CurEmp!.departmentId;
  }

  @Emit("reloadEmpList")
  update() {
    const UpdateEmp: Employee = {
      id: this.id,
      name: this.name,
      age: this.age,
      salary: this.salary,
      departmentId: this.departmentId,
    };

    this.updateList = edvm.updateEmployee(UpdateEmp);
    this.checkSuccess = true
    return this.updateList;
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
