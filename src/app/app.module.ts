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
import { AuthService } from './services/auth.service';
import { AuthGuard } from './shared/auth.guard';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { CommonService } from './services/common.service';
import { EducationloanComponent } from './loan/educationloan/educationloan.component';
import { PersonalloanComponent } from './loan/personalloan/personalloan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LoanComponent,
    UpdateComponent,
    EducationloanComponent,
    PersonalloanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers: [AuthService, AuthGuard,  CommonService, HttpClient ],
  bootstrap: [AppComponent],

})
export class AppModule { 
}
