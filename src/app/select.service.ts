import { Injectable } from '@angular/core';
import { Country } from '../country';
import { State } from '../state';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor() { }

  getCountries() {
    return [
     new Country(1, 'USA' ),
     new Country(2, 'Brazil' ),
     new Country(3, 'India' ),
     new Country(4, 'United Arab Emirates' ),

    ];
  }
  
  getStates() {
   return [
     new State(1, 1, 'Arizona' ),
     new State(2, 1, 'Alaska' ),
     new State(3, 1, 'Florida'),
     new State(4, 1, 'Hawaii'),
     new State(5, 2, 'Sao Paulo' ),
     new State(6, 2, 'Rio de Janeiro'),
     new State(7, 2, 'Minas Gerais' ),
     new State(8, 3, 'Mumbai' ),
     new State(9, 3, 'Pune' ),
     new State(10, 3, 'Chennai' ),
     new State(11, 3, 'Bangalore' ),
     new State(12, 3, 'Kolkata' ),
     new State(13, 4, 'Dubai' ),
     new State(14, 4, 'Abu Dhabi' ),
     new State(15, 4, 'Sharjah' )
    ];
  }
}
