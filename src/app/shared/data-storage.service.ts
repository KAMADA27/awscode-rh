import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataStorageService {

    public isLogin: boolean;

    constructor() {
        this.isLogin = false;
     }
    
    showNav() {
        this.isLogin = true;
    }

    hideNav() {
        this.isLogin = false;
    }

    checkLogin() {
        localStorage.getItem('email') ? this.showNav() : this.hideNav();
    }
}