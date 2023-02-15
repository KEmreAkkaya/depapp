import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DepremformComponent } from './depremform/depremform.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { EarthquakeDonationSitesComponent } from './earthquake-donation-sites/earthquake-donation-sites.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { UserListComponent } from './user-list/user-list.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DepremformComponent,
    HomeComponent,
    AdminpanelComponent,
    UserComponent,
    AdminComponent,
    EarthquakeDonationSitesComponent,
    ContactComponent,
    MapComponent,
    UserListComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
