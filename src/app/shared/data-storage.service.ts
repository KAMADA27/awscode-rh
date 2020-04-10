import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataStorageService {

    private isLogin = new BehaviorSubject<boolean>(null);

    sharedLogin = this.isLogin.asObservable();

    constructor() { }

    checkLogin(isLogin: boolean) {
        this.isLogin.next(isLogin);
    }
}