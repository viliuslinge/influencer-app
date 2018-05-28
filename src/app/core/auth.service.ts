import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  logIn(username, password) {
    return Parse.User.logIn(username, password, {
      success: (user) => {
        setTimeout(() => this.router.navigate(['/admin']), 1000);
      }
    });
  }

  logOut() {
    Parse.User.logOut().then(() => {
      this.router.navigate(['/admin/login']);
    });
  }
}
