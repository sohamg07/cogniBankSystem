import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';

import { AuthService } from './auth.service';
import { CommonService } from './common.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule , RouterTestingModule ],
        providers: [CommonService, AuthService, FormBuilder]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log in the user if valid input', () => {
    var userdata = { username: "sohamg07" , password : "soham123"}
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigateByUrl');
    let commonService = TestBed.get(CommonService);
    let component = TestBed.get(LoginComponent);
    
    commonService.getCustomer().subscribe((userdata)=>{
      expect(userdata).toMatch;
      expect(localStorage).toBe("sohamg07");
      expect(spy).toHaveBeenCalledWith('/home');
    });
    service.login(userdata);
    component.goToHome();  
  });

  it('should log out the user and route to login page', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigateByUrl');

    service.logout();

    expect(localStorage).toBeNull;
    expect(spy).toHaveBeenCalledWith('/login');
  });
});
 