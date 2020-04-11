import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  employees: Employee[];
  newEmployees: boolean;
  empForm: FormGroup;
  editMode: boolean = false;
  searchMode: boolean = false;
  search: string;

  constructor(
    public ngxSmartModalService: NgxSmartModalService, 
    private router: Router,
    public dataStorageService: DataStorageService,
    public datePipe: DatePipe) { }

  ngOnInit(): void {
    this.initForm();
    this.initEmployeesData();
    this.dataStorageService.showNav();
  }

  private initForm() {
    let name = '';
    let role = ''
    let dateOfBirth = '';
    let salary = '';
    this.editMode = false;

    this.empForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'role': new FormControl(role, Validators.required),
      'dateOfBirth': new FormControl(dateOfBirth, Validators.required),
      'salary': new FormControl(salary, [
        Validators.required, 
        Validators.pattern(/^[0-9\,\.\/]+$/)
      ])
    });
  }

  initEmployeesData() {
    this.employees = JSON.parse(localStorage.getItem('employees'));
    this.employees === null ? this.employees = [] : null; 
  }

  addEmployee() {
    this.initForm();
    this.ngxSmartModalService.getModal('empModal').open();
  }

  editEmployee(index: number) {
    this.editMode = true;
    const employee = { ...this.employees[index] };
    
    this.empForm = new FormGroup({
      'name': new FormControl(employee.name, Validators.required),
      'role': new FormControl(employee.role, Validators.required),
      'dateOfBirth': new FormControl(this.datePipe.transform(new Date(employee.dateOfBirth).toISOString().substring(0, 10), 'yyyy-MM-dd'), Validators.required),
      'salary': new FormControl(employee.salary, [
        Validators.required, 
        Validators.pattern(/^[0-9\,\.\/]+$/)
      ])
    })

    localStorage.setItem('editIndex', index.toString());
    this.ngxSmartModalService.getModal('empModal').open();
  }

  removeEmployee(index: number) {
    let employee = this.employees[index];

    if (this.searchMode) {
      this.employees = JSON.parse(localStorage.getItem('employees'));
      
      index = this.employees.findIndex((emp) => {
        return emp.name === employee.name 
      })
    }

    this.employees.splice(index, 1);
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }

  changeUser() {
    this.dataStorageService.hideNav();
    this.router.navigate(['./auth']);
  }

  searchName() {
    let searchEmp;
    let newEmployees = [];
    
    if (this.search !== '' && this.employees != null) {
      this.searchMode = true;

      this.employees.filter(emp => {
        searchEmp = emp.name.toLowerCase().includes(this.search.toLowerCase());
        searchEmp ? newEmployees.push(emp) : null;
      })

      this.employees = newEmployees;
    } else {
      this.searchMode = false
      this.employees = JSON.parse(localStorage.getItem('employees'));
    }
  }

  onSubmit() {
    if (this.editMode) {
      const index = localStorage.getItem('editIndex');
      this.employees[index] = this.empForm.value;
    } else {
      this.employees.push(this.empForm.value);
    }

    localStorage.setItem('employees', JSON.stringify(this.employees));
    this.empForm.reset();
    this.ngxSmartModalService.close('empModal');
  }
}
