import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { HostListener, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router'
import { DataService } from '../data.service';

declare const window: any;
@Component({
  selector: 'ngx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  bannerColorToBlack: boolean;
  displayBlock: boolean = false;
  right50: boolean = false;
  positionFixed: boolean = false;
  displayCompanyMenu: boolean = false;
  displayServiceMenu: boolean = false;
  displayRecruitMenu: boolean = false;
  @Output() right50Event = new EventEmitter<boolean>();
  user_img: String;
  user_name: String;
  user_email:String;
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentUserPhotoUrl.subscribe(
      (result) =>{
        this.user_img =result;
      }
    );
    this.dataService.currentUserDisplayName.subscribe(
      (result) =>{
        this.user_name =result;
      }
    );
    this.dataService.currentUserEmail.subscribe(
      (result) =>{
        this.user_email = result;
      }
    )
  }

  updateData(data) {
    this.user_img = data === 'logout' ? null : (data.photos === undefined ? data.client.photoUrl : data.photos[0].value);
    this.user_name = data === 'logout' ? null : (data.client === undefined ? data.displayName : data.client.displayName);
    this.user_email = data === 'logout' ? null : (data.emails === undefined ? data.client.emailId : data.emails[0].value);
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 20 && window.outerHeight > 375) {
      this.bannerColorToBlack = true;
      this.positionFixed = true;
    } else if (window.outerHeight <= 375) {
      this.bannerColorToBlack = false;
      this.positionFixed = false;
    } else {
      this.bannerColorToBlack = false;
      this.positionFixed = true;
    }
  }

  sidebar(state: any) {
    if (state === 'close') {
      this.displayBlock = false;
      this.right50 = false;  //emit from here
      this.right50Event.emit(this.right50);
      this.positionFixed = false;
    } else {
      this.displayBlock = true;
      this.right50 = true;  //emit from here
      this.right50Event.emit(this.right50);
      this.positionFixed = true;
    }

  }

  navigateTo(state: any) {
    this.displayBlock = false;
    this.right50 = false;   //emit from here
    this.right50Event.emit(this.right50);
    this.router.navigate([state]);
  }
}
