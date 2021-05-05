import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
  
  invalidCredentials(){
    var check=this.authService.invalid();
    if(check)
    this.invalidcredentials=true;
  }

  goToHome() {
     if(this.loginInfo.invalid){
       return;
     }
    this.authService.login(this.loginInfo.value);
    //this.invalidCredentials();
    //this._router.navigateByUrl('/home');
   }
 

}
