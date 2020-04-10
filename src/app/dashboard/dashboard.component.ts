import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 1,
      name: 'Jorgim Ludibriador',
      role: 'Desenvolvedor Front-End',
      dateOfBirth: new Date('0001-01-01'),
      salary: '2,50'
    },
    {
      id: 2,
      name: 'Ronaldo Dibrador',
      role: 'Designer',
      dateOfBirth: new Date('1998-12-31'),
      salary: '4,500'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
