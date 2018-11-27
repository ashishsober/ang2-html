import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home-component/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CareerComponent } from './pages/career-component/career.component'
import { ContactComponent } from './pages/contact-component/contact.component';
import {  AppMaterialModule  } from './app.material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CareerComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
