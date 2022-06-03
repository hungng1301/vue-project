import {  observable } from "mobx";

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
}

export const dep = new DepartmentStore()
