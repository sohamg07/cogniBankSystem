import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { UpdateComponent } from './update/update.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path:'', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent , canActivate:[AuthGuard]},
  { path: 'loan', component: LoanComponent ,canActivate:[AuthGuard]},
  { path: 'update', component: UpdateComponent ,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
