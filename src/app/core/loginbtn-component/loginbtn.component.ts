import { Component, Output, EventEmitter, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DataService } from '../data.service';
import { AlertDialogComponent } from '../../core/dialog/alert-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
    selector: 'ngx-login-btn',
    templateUrl: './loginbtn.component.html',
    styleUrls: ['./loginbtn.component.scss']
})
export class LoginbtnComponent implements OnInit {
    alertDialogRef: MatDialogRef<AlertDialogComponent>;
    loginInBtn: string;
    displayNone: boolean = false;
    user_img: string = sessionStorage.getItem("photoUrl") === null ? "" : sessionStorage.getItem("photoUrl");
    user_data = {
        accessToken: sessionStorage.getItem("accessToken"),
        uid: sessionStorage.getItem("user_uid"),
        photoURL: sessionStorage.getItem("photoUrl"),
        emailId: sessionStorage.getItem("emailId"),
    }
    @Output() right50Event = new EventEmitter<boolean>();

    constructor(private router: Router, private dataService: DataService,
        private dialog: MatDialog, private zone: NgZone, ) { }

    ngOnInit() {
        this.dataService.subject.subscribe((result) => {
            console.log("user data at login component" +result)
            this.showLogoutButton(result);
        });


        if (this.user_data.accessToken != null || this.user_data.uid != null) {
            this.dataService.authenticateEmp(this.user_data).subscribe((result) => {
                if (result.responseAction === "info") {
                    this.showLogoutButton(result);
                } else {
                    this.showLoginButton();
                }
            }, (err) => {
                console.log(err);
                this.errorModal(err);
            });
        } else {
            this.showLoginButton();
        }
    }

    showLoginButton() {
        sessionStorage.clear();
        this.displayNone = false;
        this.loginInBtn = "Login";
    }

    showLogoutButton(result: any) {
        if(result != 'logout'){
            sessionStorage.setItem('user_uid', result.id);
            sessionStorage.setItem('accessToken', result.accessToken);
            let photoUrl = result.photoUrl === undefined ? result.photos[0].value : result.photoUrl;
            let email = result.emailId === undefined ? result.emails[0].value : result.emailId;
            sessionStorage.setItem('photoUrl', photoUrl);
            sessionStorage.setItem('emailId', email);
            sessionStorage.setItem('displayName', result.displayName );
            this.zone.run(() => {
                this.displayNone = true; //show the user_img
                this.user_img = photoUrl;
                this.loginInBtn = "Logout";
            });
        } else {
               this.loginInBtn = "Login";
        }
    }

    //google auth call
    googleAuth(value:string) {
        if(value === 'Login'){
            this.dataService.googleAuthCall();
        } else {
            this.logout();
        }
       
    }

    logout() {
        this.dataService.logout(this.user_data).subscribe((result) => {
           console.log("logout sucessfully") 
        }, (err) => {
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
