import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home-component/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CareerComponent } from './pages/career-component/career.component'
import { ContactComponent } from './pages/contact-component/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CareerComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
