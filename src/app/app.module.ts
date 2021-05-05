import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { UpdateComponent } from './update/update.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { CommonService } from './common.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LoanComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, DatePipe,CommonService,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
