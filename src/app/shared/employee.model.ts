export class Employee {
    public name: string;
    public role: string;
    public dateOfBirth: Date;
    public salary: string;

    constructor(name: string, role: string, dateOfBirth: Date, salary: string) {
        this.name = name;
        this.role = role;
        this.dateOfBirth = dateOfBirth;
        this.salary = salary;
    }
}