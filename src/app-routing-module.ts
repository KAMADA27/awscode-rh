import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './app/auth/auth.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'auth', component: AuthComponent  },
    { path: 'dashboard', component: DashboardComponent }
]

@NgModule({
    imports: [
        [RouterModule.forRoot(appRoutes)]
    ],
    exports: [
        [RouterModule]
    ]
})

export class AppRoutingModule {}