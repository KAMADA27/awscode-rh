import { Injectable } from '@angular/core';

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
}