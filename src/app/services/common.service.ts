import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  constructor(
    private _http : HttpClient
  ) { }

  createCustomer(customer){
    return this._http.post("http://localhost:3000/customer",customer);
  }

  getCustomer(){
    return this._http.get("http://localhost:3000/customer");
  }
 
}
