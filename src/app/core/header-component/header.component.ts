import { Component, Output, EventEmitter ,NgZone, OnInit} from '@angular/core';
import { HostListener, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router'
import { DataService } from '../data.service';
import { AlertDialogComponent } from '../../core/dialog/alert-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';


declare const window: any;
@Component({
  selector: 'ngx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  bannerColorToBlack:boolean;
  displayBlock:boolean=false;
  right50:boolean=false;
  positionFixed:boolean=false;
  displayCompanyMenu:boolean=false;
  displayServiceMenu:boolean=false;
  displayRecruitMenu:boolean=false;
  alertDialogRef: MatDialogRef<AlertDialogComponent>;
  loginInBtn:string;
  userData = {
    accessToken:sessionStorage.getItem("accessToken"),
    uid:sessionStorage.getItem("user_uid")
  }
  @Output() right50Event = new EventEmitter<boolean>();  

  constructor(private router:Router,private dataService:DataService,
    private dialog: MatDialog,private zone:NgZone,){}

  ngOnInit(){
    if(this.userData.accessToken != null || this.userData.uid != null){
      this.dataService.authenticateEmp(this.userData).subscribe((result) => {
        if(result.length === 1 ){
          this.loginInBtn = "Logout";
        } else {
           this.loginInBtn = "Login";
        }
     },(err) => {
        console.log(err);
        this.errorModal(err);
     });
    } else {
      this.loginInBtn = "Login";
    }
  } 

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 20 && window.outerHeight > 375) {
      this.bannerColorToBlack = true;
      this.positionFixed = true;
    } else if (window.outerHeight <= 375){
      this.bannerColorToBlack = false;
      this.positionFixed = false;
    } else {
      this.bannerColorToBlack = false;
      this.positionFixed = true;
    }
  }

  sidebar(state:any){
    if(state ==='close'){
      this.displayBlock =false;
      this.right50 = false;  //emit from here
      this.right50Event.emit(this.right50);
      this.positionFixed = false;
    } else {
      this.displayBlock =true;
      this.right50 = true;  //emit from here
      this.right50Event.emit(this.right50);
      this.positionFixed = true;
    }
   
  }

  navigateTo(state:any){
    this.displayBlock =false;
    this.right50 = false;   //emit from here
    this.right50Event.emit(this.right50);
    this.router.navigate([state]);
  }

  //google auth call
  gsubmit(value:string) {
    if(value === 'Login') {
      this.dataService.getGoogleAuth()
      .then((result) => {
          sessionStorage.setItem('photoUrl', result.user.photoURL);
          sessionStorage.setItem('emalid', result.user.email);  
          this.saveUserCall(result.user);        
      },(err) => {
        console.log(err);
        this.errorModal(err);
      });
    } else {
      this.logout();
    }
   
  }
  

  //save user and accestoken call for the database
  saveUserCall(userData:any) {
    this.dataService.postEmployee(userData).subscribe((result) => {
          sessionStorage.setItem('user_uid', result.uid);
          sessionStorage.setItem('accessToken', result.accessToken);
          this.zone.run(() =>{
            this.loginInBtn = "Logout";
         });  
    },(err) => {
      console.log(err);
      this.errorModal(err);
    });
  }

  logout () {
    this.dataService.logout(this.userData).subscribe((result) =>{
      this.loginInBtn = "Login";
      sessionStorage.clear();
    },(err)=>{
      console.log(err);
      this.errorModal(err);
    });
  }

  errorModal(err: any) {
    this.alertDialogRef = this.dialog.open(AlertDialogComponent, {
      hasBackdrop: true,
      height: '316px',
      width: '874px',
      disableClose: true,
      data: err
    });
  }
}
