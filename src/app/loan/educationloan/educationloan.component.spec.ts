import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';

import { EducationloanComponent } from './educationloan.component';

describe('EducationloanComponent', () => {
  let component: EducationloanComponent;
  let fixture: ComponentFixture<EducationloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationloanComponent ],
      imports: [ HttpClientTestingModule , RouterTestingModule ],
      providers: [CommonService, AuthService, FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
