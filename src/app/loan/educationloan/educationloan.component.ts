import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-educationloan',
  templateUrl: './educationloan.component.html',
  styleUrls: ['./educationloan.component.css']
})
export class EducationloanComponent implements OnInit {

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
  }
}
