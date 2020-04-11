import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/app-routing-module';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataStorageService } from './shared/data-storage.service';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [DataStorageService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
