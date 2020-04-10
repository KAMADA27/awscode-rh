import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  error: string = null;
  isLogin: boolean = true;
 
  constructor(
    private router: Router,
    private dataStorageService: DataStorageService) { }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.error = 'Email inválido';
      return;
    }

    this.error = null;
    const email = form.value.email;
    this.isLogin = true;
    this.dataStorageService.checkLogin(this.isLogin);

    localStorage.setItem('email', email);
    this.router.navigate(['./dashboard']);
  }
}
