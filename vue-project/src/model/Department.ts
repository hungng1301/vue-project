export default class Department {
    id!: number;
    name!: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name
    }

    public setId(id: number) {
        this.id = id
    }

    public setName(name: string) {
        this.name = name
    }

    public getId() {
        return this.id
    }

    public getName() {
        return this.name
    }
}