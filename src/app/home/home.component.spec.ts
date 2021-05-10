import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ HttpClientTestingModule , RouterTestingModule ],
      providers: [CommonService, AuthService, FormBuilder] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect the customer to the home page',()=>{
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigateByUrl');
  
    component.goToLoan();
  
    expect(spy).toHaveBeenCalledWith('/loan');
    });

  it('should redirect the customer to the home page',()=>{
      let router = TestBed.get(Router);
      let spy = spyOn(router, 'navigateByUrl');
    
      component.goToUpdate();
    
      expect(spy).toHaveBeenCalledWith('/update');
  });
});
