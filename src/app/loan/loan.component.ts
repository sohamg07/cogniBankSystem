import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  optionValue = '';
  ROI = '';
  date = new Date
  constructor(
    private authService : AuthService,
    private commonservice : CommonService,
    private fb : FormBuilder,
    private _router : Router
  ) { }

  ngOnInit(): void {
  } 

  loanInfo = this.fb.group({
    loanType : [ '', [ Validators.required ]],
    loanAmt : [ '', [ Validators.required,Validators.pattern("^[0-9]+$") ]],
    applyDate : [ '', [ Validators.required ]],
    rateOfInterest : [ '', [ Validators.required ]],
    duration :  [ '', [ Validators.required ]],

      courseFee : [ '', [ Validators.required,Validators.pattern("^[0-9]+$")] ],
      course : [ '', [ Validators.required ]],
      fatherOcc : [ '', [ Validators.required ]],
      experience : [ '', [ Validators.required,Validators.pattern("^[0-9]+$") ]],
      rationCard : [ '', [ Validators.required ]],
      fatherAnnualIncome :  [ '', [ Validators.required,Validators.pattern("^[0-9]+$") ]],
   

      annualIncome : [ '', [ Validators.required,Validators.pattern("^[0-9]+$") ]],
      companyName : [ '', [ Validators.required ]],
      designation : [ '', [ Validators.required ]],
      perosnalExperience : [ '', [ Validators.required,Validators.pattern("^[0-9]+$")]],

  });

  onSelect(optionValue){
    if(this.optionValue === "Education")
    this.ROI = '5';
    if(this.optionValue === "Personal")
    this.ROI = '8';
  }
  get loanType() {
    return this.loanInfo.get('loanType');
  }

  get loanAmt() {
    return this.loanInfo.get('loanAmt');
  }

  get applyDate() {
    return this.loanInfo.get('applyDate');
  }

  get rateOfInterest() {
    return this.loanInfo.get('rateOfInterest');
  }

  get duration() {
    return this.loanInfo.get('duration');
  }

  get courseFee() {
    return this.loanInfo.get('courseFee');
  }

  get course() {
    return this.loanInfo.get('course');
  }

  get fatherOcc() {
    return this.loanInfo.get('fatherOcc');
  }

  get experience() {
    return this.loanInfo.get('experience');
  }

  get rationCard() {
    return this.loanInfo.get('rationCard');
  }

  get fatherAnnualIncome() {
    return this.loanInfo.get('fatherAnnualIncome');
  }

  get annualIncome() {
    return this.loanInfo.get('annualIncome');
  }

  get companyName() {
    return this.loanInfo.get('companyName');
  }

  get designation() {
    return this.loanInfo.get('designation');
  }

  get perosnalExperience() {
    return this.loanInfo.get('perosnalExperience');
  }

  goToHome() {
    // this.commonservice.createCustomer(this.loanInfo.value).subscribe((response)=>{
    //   console.log("Loan Data added to database")
    // })
    this._router.navigateByUrl("/home")
  }

  onLogout(){
    this.authService.logout();
  }

}
