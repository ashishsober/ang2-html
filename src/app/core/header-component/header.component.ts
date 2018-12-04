import { Component, Output, EventEmitter } from '@angular/core';
import { HostListener, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router'



declare const window: any;
@Component({
  selector: 'ngx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  bannerColorToBlack:boolean;
  displayBlock:boolean=false;
  right50:boolean=false;
  displayCompanyMenu:boolean=false;
  displayServiceMenu:boolean=false;
  displayRecruitMenu:boolean=false;
  
  @Output() right50Event = new EventEmitter<boolean>();  

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
      this.right50 = false;  //emit from here
      this.right50Event.emit(this.right50);
      
    } else {
      this.displayBlock =true;
      this.right50 = true;  //emit from here
      this.right50Event.emit(this.right50);
      
    }
   
  }

  navigateTo(state:any){
    this.displayBlock =false;
    this.right50 = false;   //emit from here
    this.right50Event.emit(this.right50);
    this.router.navigate([state]);
  }
}
