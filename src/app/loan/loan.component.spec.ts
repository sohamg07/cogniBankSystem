import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';

import { LoanComponent } from './loan.component';

describe('LoanComponent', () => {
  let component: LoanComponent;
  let fixture: ComponentFixture<LoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanComponent ],
      imports: [ HttpClientTestingModule , RouterTestingModule ],
      providers: [CommonService, AuthService, FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 15 fields in the form',()=>{
    expect(component.loanInfo.contains('loanType')).toBeTruthy();
    expect(component.loanInfo.contains('loanAmt')).toBeTruthy();
    expect(component.loanInfo.contains('applyDate')).toBeTruthy();
    expect(component.loanInfo.contains('rateOfInterest')).toBeTruthy();
    expect(component.loanInfo.contains('duration')).toBeTruthy();
    expect(component.loanInfo.contains('courseFee')).toBeTruthy();
    expect(component.loanInfo.contains('course')).toBeTruthy();
    expect(component.loanInfo.contains('fatherOcc')).toBeTruthy();
    expect(component.loanInfo.contains('experience')).toBeTruthy();
    expect(component.loanInfo.contains('rationCard')).toBeTruthy();
    expect(component.loanInfo.contains('fatherAnnualIncome')).toBeTruthy();
    expect(component.loanInfo.contains('annualIncome')).toBeTruthy();
    expect(component.loanInfo.contains('companyName')).toBeTruthy();
    expect(component.loanInfo.contains('designation')).toBeTruthy();
    expect(component.loanInfo.contains('perosnalExperience')).toBeTruthy();
 });

 it('should redirect the customer to the home page',()=>{
  let router = TestBed.get(Router);
  let spy = spyOn(router, 'navigateByUrl');

  component.goToHome();

  expect(spy).toHaveBeenCalledWith('/home');
  });

  it('should set ROI 5 when loanType is Education',()=>{
    let value = component.optionValue = "Education";

    component.onSelect(value);
    fixture.detectChanges();

    expect(component.ROI).toBe('5');
 });

  it('should set ROI 8 when loanType is Personal',()=>{
      let value = component.optionValue = "Personal";
  
      component.onSelect(value);
      fixture.detectChanges();
  
      expect(component.ROI).toBe('8');
 });

 it('should call loogout from authservice',()=>{
  let service = TestBed.get(AuthService);
  let spy = spyOn(service, 'logout');

  component.onLogout();

  expect(spy).toHaveBeenCalled();
});
});

