import { Component, Injectable, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorStateMatcher } from '@angular/material/core';

@Injectable({
  providedIn: 'root'
}) 

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css' ]
})
export class LoginComponent implements OnInit {
  invalidcredentials = false;
  matcher = new MyErrorStateMatcher();

  constructor( 
    private authService: AuthService,
    private fb : FormBuilder,
    private _router : Router, ) { }

  ngOnInit(): void {
  } 

  loginInfo = this.fb.group({
    username : [ '', [ Validators.required ]],
    password : [ '', [ Validators.required ] ],
  });

  get username() {
    return this.loginInfo.get('username');
  }

  get password() {
    return this.loginInfo.get('password');
  }

  goToRegister() {
    this._router.navigateByUrl("/register")
  }
  
  goToHome() {
     if(this.loginInfo.invalid){
       return;
     }
    this.authService.login(this.loginInfo.value);
   }
 

}
