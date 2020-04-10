export class Employee {
    id: number;
    public name: string;
    public role: string;
    public dateOfBirth: Date;
    public salary: string;

    constructor(id: number, name: string, role: string, dateOfBirth: Date, salary: string) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.dateOfBirth = dateOfBirth;
        this.salary = salary;
    }
}