import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/auth.service';
import * as Parse from 'parse';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {

  buttonList = [
    'Influencers',
    'Brands',
    'Campaigns',
    'Registrations'
  ];

  @Output() routeChange = new EventEmitter();
  currentPage: String;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  setCurrentPage(data) {
    this.currentPage = data;
    this.routeChange.emit(this.currentPage);
  }

  adminLogOut() {
    this.authService.logOut();
  }

}
