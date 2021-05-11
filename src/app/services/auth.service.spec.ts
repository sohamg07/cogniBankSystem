import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from './auth.service';
import { CommonService } from './common.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule , RouterTestingModule ],
        providers: [CommonService, AuthService, FormBuilder]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log out the user and route to login page', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigateByUrl');

    service.logout();

    expect(localStorage).toBeNull;
    expect(spy).toHaveBeenCalledWith('/login');
  });

  it('should call onInit', () => {
    let spy = spyOn(service , "ngOnInit");
    
    service.ngOnInit;

    expect(spy).not.toHaveBeenCalled();
  });
});
 