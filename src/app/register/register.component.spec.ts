import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';
import { State } from '../services/state';
import { customer } from '../shared/customer.model';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [ HttpClientTestingModule , RouterTestingModule ],
      providers: [CommonService, AuthService, FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 12 fields in the form',()=>{
    expect(component.registrationInfo.contains('name')).toBeTruthy();
    expect(component.registrationInfo.contains('username')).toBeTruthy();
    expect(component.registrationInfo.contains('password')).toBeTruthy();
    expect(component.registrationInfo.contains('address')).toBeTruthy();
    expect(component.registrationInfo.contains('country')).toBeTruthy();
    expect(component.registrationInfo.contains('state')).toBeTruthy();
    expect(component.registrationInfo.contains('email')).toBeTruthy();
    expect(component.registrationInfo.contains('gender')).toBeTruthy();
    expect(component.registrationInfo.contains('contactNo')).toBeTruthy();
    expect(component.registrationInfo.contains('dob')).toBeTruthy();
    expect(component.registrationInfo.contains('accountType')).toBeTruthy();
    expect(component.registrationInfo.contains('panNo')).toBeTruthy();
 });

 it('name control should contain only alphabets and spaces ',()=>{
  let control = component.registrationInfo.get('name');
  control.setValue('soham@123');
  expect(control.valid).toBeFalsy();
 });

 it('address control is required ',()=>{
  let control = component.registrationInfo.get('address');
  control.setValue('');
  expect(control.valid).toBeFalsy();
 });

 it('contactno control should contain only numeric values',()=>{
  let control = component.registrationInfo.get('contactNo');
  control.setValue('soham');
  expect(control.valid).toBeFalsy();
 });

 it('Should go to login if registrationInfo is valid',()=>{
  let router = TestBed.get(Router);
  let spy = spyOn(router, 'navigateByUrl');

  component.registrationInfo.controls.name.setValue("Soham")
  component.registrationInfo.controls.username.setValue("sohamg07")
  component.registrationInfo.controls.password.setValue("soham123")
  component.registrationInfo.controls.address.setValue("Dhankawdi,Pune")
  component.registrationInfo.controls.country.setValue("India")
  component.registrationInfo.controls.state.setValue("Pune")
  component.registrationInfo.controls.email.setValue("soham@gmail.com")
  component.registrationInfo.controls.gender.setValue("male")
  component.registrationInfo.controls.contactNo.setValue("8983449375")
  component.registrationInfo.controls.dob.setValue("1998-07-07")
  component.registrationInfo.controls.accountType.setValue("savings")
  component.registrationInfo.controls.panNo.setValue("BUEG123654IY")

  component.goToLogin();
  fixture.detectChanges();

  expect(spy).toHaveBeenCalledWith('/login');
 });

 it('Should go call the createcustomer method in authservice',()=>{
  let service = TestBed.inject(CommonService);
  let spy = spyOn(service , 'createCustomer').and.returnValues

  component.registrationInfo.controls.name.setValue("Soham")
  component.registrationInfo.controls.username.setValue("sohamg07")
  component.registrationInfo.controls.password.setValue("soham123")
  component.registrationInfo.controls.address.setValue("Dhankawdi,Pune")
  component.registrationInfo.controls.country.setValue("India")
  component.registrationInfo.controls.state.setValue("Pune")
  component.registrationInfo.controls.email.setValue("soham@gmail.com")
  component.registrationInfo.controls.gender.setValue("male")
  component.registrationInfo.controls.contactNo.setValue("8983449375")
  component.registrationInfo.controls.dob.setValue("1998-07-07")
  component.registrationInfo.controls.accountType.setValue("savings")
  component.registrationInfo.controls.panNo.setValue("BUEG123654IY")

  component.goToLogin();
  fixture.detectChanges();

  expect(spy).toHaveBeenCalled();
 });

 it('Should not go to login if registrationInfo is invalid',()=>{
  let router = TestBed.get(Router);
  let spy = spyOn(router, 'navigateByUrl');

  component.goToLogin();
  fixture.detectChanges();

  expect(spy).not.toHaveBeenCalledWith('/login');
 });

 it('should set states when country is selected',()=>{
  component.onSelect(1);
  fixture.detectChanges();

  expect(component.states.length).toBe(4);
});

});

