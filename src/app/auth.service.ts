import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { customer } from 'src/app/customer.model'
import { CommonService } from './common.service';
import { LoginComponent } from './login/login.component';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  newCustomer = {};
  customer;
  flag=0;
  invalidCredentials : boolean = false;
  constructor(
    private commonservice :CommonService,
    private http : HttpClient,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  public login(userInfo: User){
    this.commonservice.getCustomer()
      .subscribe((result) => {
        console.log(result)
        console.log(userInfo)
        this.customer=result;
        console.log(customer)
          for(let items of this.customer){
            if(items.username == userInfo['username'] && items.password == userInfo['password']){
                localStorage.setItem('token', items.username);
                console.log("Valid")
                this.router.navigateByUrl('/loan')
            }
            else
            this.invalid();
          }
      }) 
      console.log(customer)
  }

public invalid(){
  return true;
} 

  public adduser(customer1){
    this.newCustomer = customer1;
    console.log(this.newCustomer)
  }
  
  isloggedIn(){
    return localStorage.getItem('token') !== null;
  }

}
