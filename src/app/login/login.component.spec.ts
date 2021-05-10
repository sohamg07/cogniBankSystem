import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms'
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule} from '@angular/router/testing';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
   
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ HttpClientTestingModule , RouterTestingModule ],
      providers: [CommonService, AuthService, FormBuilder]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 2 fields in the form',()=>{
    expect(component.loginInfo.contains('username')).toBeTruthy();
    expect(component.loginInfo.contains('password')).toBeTruthy();
 });

 it('should make the name control required',()=>{
    let control = component.loginInfo.get('username');
    control.setValue('');
    expect(control.valid).toBeFalsy();
 });

 it('should make the password control required',()=>{
  let control = component.loginInfo.get('password');
  control.setValue('');
  expect(control.valid).toBeFalsy();
});

 it('should redirect the customer to the register page',()=>{
  let router = TestBed.get(Router);
  let spy = spyOn(router, 'navigateByUrl');

  component.goToRegister();

  expect(spy).toHaveBeenCalledWith('/register');
  });

});


