import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  currentPage: String = 'Influencers';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.navigate(['/admin/influencers'])
  }

  setCurrentPage(currentPage) {
    this.currentPage = String(currentPage);
  }

}
