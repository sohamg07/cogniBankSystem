import { Component, Injectable, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
}) 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css' ]
})
export class LoginComponent implements OnInit {
  invalidcredentials = false;

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
