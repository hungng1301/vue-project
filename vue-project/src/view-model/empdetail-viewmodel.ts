import Employee, {emp} from "@/model/Employee";
import { action } from "mobx";

export default class EmpDetailViewModel {
    
    @action.bound getEmpById(eid: number) {
        const CurEmp = emp.employeeList.find((emp) => emp.id === eid);
        return CurEmp
    }

    @action.bound updateEmployee(EmpUpdate: Employee) {
        const e = emp.employeeList.find((em) => em.id == EmpUpdate.id) as Employee
        e.name = EmpUpdate.name;
        e.age = EmpUpdate.age;
        e.salary = EmpUpdate.salary;
        e.departmentId = EmpUpdate.departmentId;
        return emp.employeeList;
    }
}

export const edvm = new EmpDetailViewModel