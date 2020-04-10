import { Component } from '@angular/core';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    isLogin: boolean = false;

    constructor(private dataStorageService: DataStorageService) {}

    ngOnInit() {
      this.dataStorageService.sharedLogin.subscribe(login => this.isLogin = login);
    }

    // checkLogin() {
    //   let email = localStorage.getItem('email');
    //   return email ? true : false;
    // }
}
