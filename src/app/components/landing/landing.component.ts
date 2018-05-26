import { Component, OnInit } from '@angular/core';
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
