import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-top-navbar',
  templateUrl: './admin-top-navbar.component.html',
  styleUrls: ['./admin-top-navbar.component.scss']
})
export class AdminTopNavbarComponent implements OnInit {

  @Input() page: String;

  constructor(
  ) { }

  ngOnInit() {
  }
}
