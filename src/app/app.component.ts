import { Component } from '@angular/core';
import { DataStorageService } from './shared/data-storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    isLogin: boolean;

    constructor(public dataStorageService: DataStorageService) {}

    ngOnInit() {
      this.dataStorageService.checkLogin();
    }
}
