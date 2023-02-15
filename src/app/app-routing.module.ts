import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { ContactComponent } from './contact/contact.component';
import { DepremformComponent } from './depremform/depremform.component';
import { EarthquakeDonationSitesComponent } from './earthquake-donation-sites/earthquake-donation-sites.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'yakinbildirimformu', component: DepremformComponent },
  { path: 'depremyardimsiteleri', component: EarthquakeDonationSitesComponent },
  { path: 'iletisim', component: ContactComponent },
  { path: 'üyegiris', component: UserComponent },
  { path: 'admin', component: AdminComponent },
  //{ path: 'admin/:id', component: AdminComponent},
  { path: 'adminpanel', component: AdminpanelComponent},
  { path: 'adminpanel/userlist', component: UserListComponent},
  { path: 'adminpanel/userlist/:id', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
