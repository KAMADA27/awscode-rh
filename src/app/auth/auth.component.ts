import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  error: string = null;
 
  constructor(
    private router: Router,
    private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    localStorage.removeItem('employees');
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.error = 'Email inválido';
      return;
    }

    this.error = null;
    this.dataStorageService.showNav();
    this.router.navigate(['./dashboard']);
  }
}
