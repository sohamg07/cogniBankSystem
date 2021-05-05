import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { DatePipe } from '@angular/common';
import { CommonService } from '../common.service';
import { Country } from '../../country';
import { SelectService } from '../select.service';
import { State } from '../../state';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [DatePipe],
})

export class RegisterComponent implements OnInit {
  date = new Date;
  selectedCountry: Country = new Country(2, 'Brazil');
  countries: Country[];
  states: State[];

  constructor(
    private selectService: SelectService,
    private commonservice : CommonService,
    private authService: AuthService,
    private fb : FormBuilder,
    private _router : Router,
    public DatePipe : DatePipe
  ) {
  }
  
  ngOnInit(): void {
    this.countries = this.selectService.getCountries();
    this.onSelect(this.selectedCountry.id);
  }

  onSelect(countryid) {
    this.states = this.selectService.getStates().filter((item) => item.countryid == countryid);
  }

  RegistrationInfo = this.fb.group({
    name: [ '', [ Validators.required, Validators.pattern("^[a-zA-Z ]+$")]],
    username : [ '', [ Validators.required ] ],
    password: [ '', [ Validators.required ]],
    address : [ '', [ Validators.required ] ],
    country: [ '', [ Validators.required ]],
    state : [ '', [ Validators.required ] ],
    email : [ '', [ Validators.required , Validators.email ]],
    gender : [ '', [ Validators.required ] ],
    contactno : [ '', [ Validators.required,Validators.minLength(10),Validators.pattern("^[0-9]+$")] ],
    dob : [ '', [ Validators.required ] ],
    accounttype : [ '', [ Validators.required ] ],
    panno : [ '', [ Validators.required , Validators.minLength(12),Validators.pattern("^[a-zA-Z0-9_]*$")] ],
   
  });

  get name() {
    return this.RegistrationInfo.get('name');
  }

  get username() {
    return this.RegistrationInfo.get('username');
  }

  get password() {
    return this.RegistrationInfo.get('password');
  }

  get address() {
    return this.RegistrationInfo.get('address');
  }

  get country() {
    return this.RegistrationInfo.get('country');
  }

  get state() {
    return this.RegistrationInfo.get('state');
  }

  get email() {
    return this.RegistrationInfo.get('email');
  }

  get gender() {
    return this.RegistrationInfo.get('gender');
  }

  get contactno() {
    return this.RegistrationInfo.get('contactno');
  }

  get dob() {
    return this.RegistrationInfo.get('dob');
  }

  get accounttype() {
    return this.RegistrationInfo.get('accounttype');
  }

  get panno() {
    return this.RegistrationInfo.get('panno');
  }

  goToLogin() {
    console.log(this.RegistrationInfo.value)
    if(this.RegistrationInfo.invalid)
      return;
    this.commonservice.createCustomer(this.RegistrationInfo.value).subscribe((response)=>{
        console.log("Customer has been registered")
    })
    this.authService.adduser(this.RegistrationInfo.value);
    this._router.navigateByUrl("/login")
  }
}
