import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';
import { RegisterInfluencerComponent } from '../auth/register-influencer/register-influencer.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    // const GameScore = Parse.Object.extend('GameScore');
    // const gameScore = new GameScore();

    // gameScore.set('score', 1337);
    // gameScore.set('playerName', 'Sean Plott');
    // gameScore.set('cheatMode', false);

    // gameScore.save(null, {
    //   success: function(gameScore) {
    //     // Execute any logic that should take place after the object is saved.
    //     alert('New object created with objectId: ' + gameScore.id);
    //     console.log(gameScore)
    //   },
    //   error: function(gameScore, error) {
    //     // Execute any logic that should take place if the save fails.
    //     // error is a Parse.Error with an error code and message.
    //     alert('Failed to create new object, with error code: ' + error.message);
    //   }
    // });

    // const query = new Parse.Query(GameScore);
    // query.find({
    //   success: function(gameScore) {
    //     // The object was retrieved successfully.
    //     console.log(gameScore);
    //   },
    //   error: function(object, error) {
    //     // The object was not retrieved successfully.
    //     // error is a Parse.Error with an error code and message.
    //   }
    // });

    // query.get('wP7PsoEEeK', {
    //   success: function(gameScore) {
    //     // The object was retrieved successfully.
    //     console.log(gameScore);
    //   },
    //   error: function(object, error) {
    //     // The object was not retrieved successfully.
    //     // error is a Parse.Error with an error code and message.
    //   }
    // });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterInfluencerComponent, {
      // width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
