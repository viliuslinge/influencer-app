import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './containers/landing/landing.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './containers/admin/admin.component';
import { InfluencersComponent } from './containers/influencers/influencers.component';
import { BrandsComponent } from './containers/brands/brands.component';
import { CampaignsComponent } from './containers/campaigns/campaigns.component';
import { RegistrationsComponent } from './containers/registrations/registrations.component';

import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'admin/login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'influencers', component: InfluencersComponent },
      { path: 'brands', component: BrandsComponent },
      { path: 'campaigns', component: CampaignsComponent },
      { path: 'registrations', component: RegistrationsComponent }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
