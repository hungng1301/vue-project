export default class Employee {
    id!: number;
    name!: string;
    age!: number;
    salary!: number;
    departmentId!: number

    constructor(id: number, name: string, age: number, salary: number, department: number){
        this.id = id;
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.departmentId = department;
    }

    public setId(id: number) {
        this.id = id;
    }
    
    public setName(name: string) {
        this.name = name;
    }

    public setAge(age: number) {
        this.age = age;
    }

    public setSalary(salary: number) {
        this.salary = salary;
    }

    public setDepartment(department: number) {
        this.departmentId = department;
    }

    public getId() {
        return this.id
    }
    public getName() {
        return this.name
    }
    public getAge() {
        return this.age
    }
    public getSalary() {
        return this.salary
    }
    public getDepartment() {
        return this.departmentId
    }
}