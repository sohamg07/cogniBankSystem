import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  optionValue = '';
  sample = '';
  date = new Date
  constructor(
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

      courseFee : [ '', [ Validators.required,Validators.pattern("^[0-9]+$")] ],
      course : [ '', [ Validators.required ]],
      fatherOcc : [ '', [ Validators.required ]],
      experience : [ '', [ Validators.required,Validators.pattern("^[0-9]+$") ]],
   

      annualIncome : [ '', [ Validators.required,Validators.pattern("^[0-9]+$") ]],
      companyName : [ '', [ Validators.required ]],
      designation : [ '', [ Validators.required ]],
      perosnalExperience : [ '', [ Validators.required,Validators.pattern("^[0-9]+$")]],

  });

  get loanType() {
    return this.loanInfo.get('loanType');
  }

  get loanAmt() {
    return this.loanInfo.get('loanAmt');
  }

  get applyDate() {
    return this.loanInfo.get('applyDate');
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
    this.commonservice.createCustomer(this.loanInfo.value).subscribe((response)=>{
      console.log("Loan Data added to database")
    })
  this._router.navigateByUrl("/login")
    this._router.navigateByUrl("/home")
  }

}
