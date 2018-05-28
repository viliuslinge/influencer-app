import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: any;

  constructor() { }

  getCurrentUser() {
    this.currentUser = Parse.User.current();
    return this.currentUser;
  }
}
