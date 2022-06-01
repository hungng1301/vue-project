import { action, observable } from "mobx";
import Department, { dep } from "./Department";

export default interface Employee {
    id: number;
    name: string;
    age: number;
    salary: number;
    departmentId: number
}

export class EmployeeStore {
    @observable
    employeeList: Employee[] = [
        {
            id: 1,
            name: 'Bruno Fernandes',
            age: 27,
            salary: 2500,
            departmentId: 1
        },
        {
            id: 2,
            name: 'Fred',
            age: 29,
            salary: 1000,
            departmentId: 1
        },
        {
            id: 3,
            name: 'Cristiano Ronaldo',
            age: 37,
            salary: 3000,
            departmentId: 1
        },
        {
            id: 4,
            name: 'Harry Maguire',
            age: 29,
            salary: 1200,
            departmentId: 1
        },
        {
            id: 5,
            name: 'Jadon Sancho',
            age: 22,
            salary: 1800,
            departmentId: 1
        },
        {
            id: 6,
            name: 'Anthony Elanga',
            age: 20,
            salary: 800,
            departmentId: 1
        },
        {
            id: 7,
            name: 'Karim Benzema',
            age: 34,
            salary: 2800,
            departmentId: 2
        },
        {
            id: 8,
            name: 'Isco',
            age: 30,
            salary: 2100,
            departmentId: 2
        },
        {
            id: 9,
            name: 'Casemiro',
            age: 30,
            salary: 2500,
            departmentId: 2
        },
        {
            id: 10,
            name: 'Luka Modric',
            age: 36,
            salary: 1400,
            departmentId: 2
        },
        {
            id: 11,
            name: 'Vinicius Junior',
            age: 21,
            salary: 1900,
            departmentId: 2
        },
        {
            id: 12,
            name: 'Neymar',
            age: 30,
            salary: 3500,
            departmentId: 3
        },
        {
            id: 13,
            name: 'Lionel Messi',
            age: 34,
            salary: 3300,
            departmentId: 3
        },
        {
            id: 14,
            name: 'Kylian Mbappe',
            age: 23,
            salary: 3200,
            departmentId: 3
        },
        {
            id: 15,
            name: 'Ander Herrera',
            age: 32,
            salary: 1900,
            departmentId: 3
        },
    ]
    @observable top10: Employee[] = [];
    @observable employeeListOfDepartment: Employee[] = [];
    @observable departmentList: Department[] = [];

    @action.bound getTopEmployee() {
        this.top10 = this.employeeList
            .sort((a, b) => b.salary - a.salary)
            .slice(0, 10);
        return this.top10
    }

    @action.bound getEmployeesFromHighestSalaryDepartment() {
        this.employeeListOfDepartment = this.employeeList
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

    @action.bound getEmpById(eid: number) {
        const CurEmp = this.employeeList.find((emp) => emp.id === eid);
        return CurEmp
    }

    @action.bound updateEmployee(EmpUpdate: Employee) {
        const e = this.employeeList.find((em) => em.id == EmpUpdate.id) as Employee
        e.name = EmpUpdate.name;
        e.age = EmpUpdate.age;
        e.salary = EmpUpdate.salary;
        e.departmentId = EmpUpdate.departmentId;
        return this.employeeList;
    }
}

export const emp = new EmployeeStore()

