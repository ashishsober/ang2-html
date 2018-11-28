import { Component } from '@angular/core';
import { HostListener, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router'



declare const window: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bannerColorToBlack:boolean;
  displayBlock:boolean=false;
  right50:boolean=false;
  toState ='state1';

  constructor(private router:Router){}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 20) {
      this.bannerColorToBlack = true;
    } else {
      this.bannerColorToBlack = false;
    }
  }

  sidebar(state:any){
    if(state ==='close'){
      this.displayBlock =false;
      this.right50 = false;
    } else {
      this.displayBlock =true;
      this.right50 = true;
    }
   
  }

  navigateTo(state:any){
    this.displayBlock =false;
    this.right50 = false;
    this.router.navigate([state]);
  }
}
