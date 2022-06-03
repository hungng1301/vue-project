import router from "@/router";
import Department, {dep} from "@/model/Department";
import Employee, {emp} from "@/model/Employee";
import { action, computed, observable } from "mobx";

export default class EmployeeViewModel {
    @observable employeesList: Employee[] = [];
    @observable depListFound: Department[] = [];
    @observable empListFound: Employee[] = [];

    @action.bound search(searchInput: string) {
        this.employeesList = emp.employeeList
        if (searchInput !== null) {
            let searchId = 0;
            this.depListFound = dep.departmentList.filter((dep) =>
                dep.name.includes(searchInput)
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

    @observable top10: Employee[] = [];
    @observable employeeListOfDepartment: Employee[] = [];
    @observable departmentList: Department[] = [];
    @action.bound getTopEmployee() {
        this.top10 = emp.employeeList
            .sort((a, b) => b.salary - a.salary)
            .slice(0, 10);
        return this.top10
    }

    @action.bound getEmployeesFromHighestSalaryDepartment() {
        this.employeeListOfDepartment = emp.employeeList
        this.departmentList = dep.departmentList
        let hightSalary = 0;
        let hightdepId = 0;

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

    @computed getEmpFromRow(row: any) {
        router.push('/employee/' + row.id)       
    }
}

export const evm = new EmployeeViewModel