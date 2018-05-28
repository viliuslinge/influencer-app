import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as Parse from 'parse';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';

// My Services/Guards
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';

// My Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { LandingComponent } from './containers/landing/landing.component';
import { AdminComponent } from './containers/admin/admin.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { RegisterInfluencerComponent } from './auth/register-influencer/register-influencer.component';
import { AdminNavbarComponent } from './components/admin-ui/admin-navbar/admin-navbar.component';
import { InfluencersComponent } from './containers/influencers/influencers.component';
import { BrandsComponent } from './containers/brands/brands.component';
import { CampaignsComponent } from './containers/campaigns/campaigns.component';
import { RegistrationsComponent } from './containers/registrations/registrations.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    LandingComponent,
    AdminComponent,
    FooterComponent,
    RegisterInfluencerComponent,
    AdminNavbarComponent,
    InfluencersComponent,
    BrandsComponent,
    CampaignsComponent,
    RegistrationsComponent
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
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: [RegisterInfluencerComponent]
})
export class AppModule {
  constructor() {
    Parse.initialize('myAppId');
    Parse.serverURL = 'http://localhost:1337/parse/';
  }
}
