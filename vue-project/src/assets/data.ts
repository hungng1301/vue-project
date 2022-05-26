import Employee from "@/model/Employee"
import Department from "@/model/Department"
import { observable,computed } from "mobx"
export default class addData {
    /*
    public employeeData(): Array<Employee> {
       
        return employee
    }*/
    @observable employee : Employee[] = [
        new Employee(1, 'Bruno Fernandes', 27, 2500, 1),
        new Employee(2, 'Fred', 29, 1000, 1),
        new Employee(3, 'Cristiano Ronaldo', 37, 3000, 1),
        new Employee(4, 'Harry Maguire', 29, 1200, 1),
        new Employee(5, 'Jadon Sancho', 22, 1800, 1),
        new Employee(6, 'Anthony Elanga', 20, 800, 1),
        new Employee(7, 'Karim Benzema', 34, 2800, 2),
        new Employee(8, 'Isco', 30, 2100, 2),
        new Employee(9, 'Casemiro', 30, 2500, 2),
        new Employee(10, 'Luka Modric', 36, 1400, 2),
        new Employee(11, 'Vinicius Junior', 21, 1900, 2),
        new Employee(12, 'Neymar', 30, 3500, 3),
        new Employee(13, 'Lionel Messi', 34, 3300, 3),
        new Employee(14, 'Kylian Mbappe', 23, 3200, 3),
        new Employee(15, 'Ander Herrera', 32, 1900, 3),
    ]
    
    @computed get getEmpList(): Array<Employee>{
        return this.employee
    }

    public departmentData() {
        const department : Department[] = [
            new Department(1, 'Manchester United'),
            new Department(2, 'Real Madrid'), 
            new Department(3, 'Paris Saint-Germain')
        ]
        return department
    }
}



