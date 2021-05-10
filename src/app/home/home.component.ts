import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private _router : Router
  ) { }

  ngOnInit(): void {
  }

  goToLoan() {
    this._router.navigateByUrl("/loan")
  }

  goToUpdate() {
    this._router.navigateByUrl("/update")
  }
 
  onLogout(){
    this.authService.logout();
  }
}
