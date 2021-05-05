import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Country } from '../../country';
import { SelectService } from '../select.service';
import { State } from '../../state';
import { HttpClient } from '@angular/common/http';
import { customer } from '../customer.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  selectedCountry: Country = new Country(3, 'India');
  countries: Country[];
  states: State[];
  object2;
  details;

  constructor(
    private _http: HttpClient,
    private selectService: SelectService,
    private fb : FormBuilder,
    private _router : Router
  ) { } 

  ngOnInit(): void {
    this._http
      .get("http://localhost:3000/customer")
      .subscribe((result) => {
      this.object2=result;
      for(let items of this.object2){
        if(items.username==localStorage.getItem('token')){
          console.log(items);
          this.details=items;
        }
      }
      })
    this.countries = this.selectService.getCountries();
    this.onSelect(this.selectedCountry.id);
  }

  onSelect(countryid) {
    this.states = this.selectService.getStates().filter((item) => item.countryid == countryid);
  } 

  updateInfo = this.fb.group({
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
    return this.updateInfo.get('name');
  }

  get username() {
    return this.updateInfo.get('username');
  }

  get password() {
    return this.updateInfo.get('password');
  }

  get address() {
    return this.updateInfo.get('address');
  }

  get country() {
    return this.updateInfo.get('country');
  }

  get state() {
    return this.updateInfo.get('state');
  }

  get email() {
    return this.updateInfo.get('email');
  }

  get gender() {
    return this.updateInfo.get('gender');
  }

  get contactno() {
    return this.updateInfo.get('contactno');
  }

  get dob() {
    return this.updateInfo.get('dob');
  }

  get accounttype() {
    return this.updateInfo.get('accounttype');
  }

  get panno() {
    return this.updateInfo.get('panno');
  }

  goToHome(){
    console.log(this.details);
    var url="http://localhost:3000/customer/"+this.details.id;
    console.log(url);
    this._http.put<any>(url, this.details).subscribe();
    //this.isSubmitted = true;
    if(this.updateInfo.invalid){
      return;
    }

    this._router.navigateByUrl('/loan');
    this._router.navigateByUrl("/home")
  }
  

}
