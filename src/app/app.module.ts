import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as Parse from 'parse';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';

// My Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { RegisterInfluencerComponent } from './components/auth/register-influencer/register-influencer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    LandingComponent,
    HomeComponent,
    ProfileComponent,
    FooterComponent,
    RegisterInfluencerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RegisterInfluencerComponent]
})
export class AppModule {
  constructor() {
    Parse.initialize('myAppId');
    Parse.serverURL = 'http://localhost:1337/parse/';
  }
}
