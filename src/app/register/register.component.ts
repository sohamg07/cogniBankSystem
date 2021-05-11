import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { DatePipe } from '@angular/common';
import { CommonService } from '../services/common.service';
import { Country } from '../services/country';
import { SelectService } from '../services/select.service';
import { State } from '../services/state';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent implements OnInit {
  date = new Date;
  selectedCountry: Country = new Country(2, 'Brazil');
  countries: Country[];
  states: State[];
  component: any;

  constructor(
    private selectService: SelectService,
    private commonService : CommonService,
    private authService: AuthService,
    private formBuilder : FormBuilder,
    private _router : Router
  ) {
  }
  
  ngOnInit(): void {
    this.countries = this.selectService.getCountries();
    this.onSelect(this.selectedCountry.id);
  }

  onSelect(countryId) {
    this.states = this.selectService.getStates().filter((item) => item.countryid == countryId);
    console.log(this.states);
  }

  registrationInfo = this.formBuilder.group({
    name: [ '', [ Validators.required, Validators.pattern("^[a-zA-Z ]+$")]],
    username : [ '', [ Validators.required ] ],
    password: [ '', [ Validators.required ]],
    address : [ '', [ Validators.required ] ],
    country: [ '', [ Validators.required ]],
    state : [ '', [ Validators.required ] ],
    email : [ '', [ Validators.required , Validators.email ]],
    gender : [ '', [ Validators.required ] ],
    contactNo : [ '', [ Validators.required,Validators.minLength(10),Validators.pattern("^[0-9]+$")] ],
    dob : [ '', [ Validators.required ] ],
    accountType : [ '', [ Validators.required ] ],
    panNo : [ '', [ Validators.required , Validators.minLength(12),Validators.pattern("^[a-zA-Z0-9_]*$")] ],
  }); 

  get name() {
    return this.registrationInfo.get('name');
  }

  get username() {
    return this.registrationInfo.get('username');
  }

  get password() {
    return this.registrationInfo.get('password');
  }

  get address() {
    return this.registrationInfo.get('address');
  }

  get country() {
    return this.registrationInfo.get('country');
  }

  get state() {
    return this.registrationInfo.get('state');
  }

  get email() {
    return this.registrationInfo.get('email');
  }

  get gender() {
    return this.registrationInfo.get('gender');
  }

  get contactNo() {
    return this.registrationInfo.get('contactNo');
  }

  get dob() {
    return this.registrationInfo.get('dob');
  }

  get accountType() {
    return this.registrationInfo.get('accountType');
  }

  get panNo() {
    return this.registrationInfo.get('panNo');
  }

  goToLogin() {
    console.log(this.registrationInfo.value)
    if(this.registrationInfo.invalid)
      return;
    this.commonService.createCustomer(this.registrationInfo.value).subscribe((response)=>{
    })
    console.log("Customer has been registered")
    this._router.navigateByUrl("/login")
  }
}
