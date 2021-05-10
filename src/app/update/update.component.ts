import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Country } from '../services/country';
import { SelectService } from '../services/select.service';
import { State } from '../services/state';
import { HttpClient } from '@angular/common/http';
import { customer } from '../shared/customer.model';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

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
  details ; 

  constructor(
    private authService : AuthService,
    private _http: HttpClient,
    private selectService: SelectService,
    private formBuilder : FormBuilder,
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
      console.log(this.object2)
    this.countries = this.selectService.getCountries();
    this.onSelect(this.selectedCountry.id);
  } 


  updateInfo = this.formBuilder.group({
    name : [ '', [ Validators.required, Validators.pattern("^[a-zA-Z ]+$")]],
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

  get contactNo() {
    return this.updateInfo.get('contactNo');
  }

  get dob() {
    return this.updateInfo.get('dob');
  }

  get accountType() {
    return this.updateInfo.get('accountType');
  }

  get panNo() {
    return this.updateInfo.get('panNo');
  }

  onSelect(countryId) {
    this.states = this.selectService.getStates().filter((item) => item.countryid == countryId);
  }

  goToHome(){
    if(this.updateInfo.invalid){
      return;
    }
    console.log(this.details);
    var url="http://localhost:3000/customer/"+this.details.id;
    console.log(url);
    this._http.put<any>(url, this.details).subscribe();
    this._router.navigateByUrl("/home")
  }
  
  onLogout(){
    this.authService.logout();
  }

}
