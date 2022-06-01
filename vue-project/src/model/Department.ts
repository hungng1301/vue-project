import { action, observable } from "mobx";
import Employee, {emp} from "../model/Employee";

export default interface Department {
    id: number;
    name: string;
}

export class DepartmentStore {
    @observable
    departmentList: Department[] = [
        {
            id: 1,
            name: 'Manchester United'
        },
        {
            id: 2,
            name: "Real Mandrid"
        },
        {
            id: 3,
            name: 'Paris Saint-Germain'
        }
    ]
    @observable employeesList: Employee[] = [];
    @observable depListFound: Department[] = [];
    @observable empListFound: Employee[] = [];

    @action.bound search(searchInput: string) {
        this.employeesList = emp.employeeList
        if (searchInput !== null) {
            let searchId = 0;
            this.depListFound = this.departmentList.filter((dep) =>
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
}

export const dep = new DepartmentStore()
