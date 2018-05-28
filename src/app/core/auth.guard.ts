import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const currentUser = Parse.User.current();
    if (!currentUser) {
      this.router.navigate(['/admin/login']);
      return false;
    } else if (currentUser) {
      return true;
    }
  }
}
