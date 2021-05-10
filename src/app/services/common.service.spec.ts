import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, inject, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { customer } from '../shared/customer.model';
import { AuthService } from './auth.service';

import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule , RouterTestingModule ],
        providers: [CommonService, AuthService, FormBuilder]
    });
    service = TestBed.inject(CommonService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should fetch customers as an Observable`, async(inject([HttpTestingController, CommonService],
    (httpClient: HttpTestingController, postService: CommonService) => {
      const httpMock = TestBed.get(HttpTestingController);

      const customerList = [
        {
          "name": "Soham Nitin Gogate",
          "username": "sohamg07",
          "password": "soham123",
          "address": "C/21\nMangal Murti Society\nPune Satara Rd.,Dhankawadi",
          "country": "3",
          "state": "9",
          "email": "sohamnitin.gogate@cognizant.com",
          "gender": "male",
          "contactNo": "08983449375",
          "dob": "2020-07-07",
          "accountType": "salary",
          "panNo": "BUE1562965PU",
        },
        {
          "name": "Alekh Garje",
          "username": "alekh",
          "password": "alekh123",
          "address": "Sinhgad Rd.,Pune",
          "country": "3",
          "state": "9",
          "email": "alekhgarje@gmail.com",
          "gender": "male",
          "contactNo": "7588277092",
          "dob": "2021-03-11",
          "accountType": "salary",
          "panNo": "RUS2356482PU",
        },
        {
          "name": "Ankita Karegaonkar",
          "username": "ankita",
          "password": "ankita123",
          "address": "Sahakar Nagar,Pune,Maharashtra",
          "country": "3",
          "state": "9",
          "email": "ankita.karegaonkar@gmail.com",
          "gender": "male",
          "contactNo": "9960882234",
          "dob": "2020-12-03",
          "accountType": "salary",
          "panNo": "BHU2658432PU",
        }
      ];


      service.createCustomer(customer)
        .subscribe((customer: any) => {
          expect(customer.length).toBe(3);
        });

      let req = httpMock.expectOne('http://localhost:3000/customer');
      expect(req.request.method).toBe("POST");

      req.flush(customerList);
      httpMock.verify();

    })));
});


