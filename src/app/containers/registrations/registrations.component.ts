import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss']
})
export class RegistrationsComponent implements OnInit {

  registrations: Array<any>;

  constructor() { }

  ngOnInit() {
    this.getAllRegistrations();
  }

  getAllRegistrations() {
    const Influencer = Parse.Object.extend('Influencer');
    const query = new Parse.Query(Influencer);

    query.find({
      success: (results) => this.registrations = results,
      error: (error) => console.log(error)
    });
  }

}
