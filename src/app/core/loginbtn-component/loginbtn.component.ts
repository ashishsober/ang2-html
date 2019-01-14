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
    user_img: string = sessionStorage.getItem("photoUrl");
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
        sessionStorage.setItem('user_uid', result.uid);
        sessionStorage.setItem('accessToken', result.accessToken);
        sessionStorage.setItem('photoUrl', result.photoURL);
        sessionStorage.setItem('emailId', result.email);
        this.zone.run(() => {
            this.displayNone = true; //show the user_img
            this.user_img = result.photoURL;
            this.loginInBtn = "Logout";
        });
    }


    //google auth call
    // gsubmit(value: string) {
    //     if (value === 'Login') {
    //         this.dataService.getGoogleAuth()
    //             .then((result) => {
    //                 this.saveUserCall(result.user);
    //             }, (err) => {
    //                 console.log(err);
    //                 this.errorModal(err);
    //             });
    //     } else {
    //         this.logout();
    //     }
    // }


    //save user and accestoken call for the database
    saveUserCall(userData: any) {
        this.dataService.postEmployee(userData);
        // this.dataService.postEmployee(userData).subscribe((result) => {
        //         this.showLogoutButton(result);
        // }, (err) => {
        //     console.log(err);
        //     this.errorModal(err);
        // });
    }

    logout() {
        this.dataService.logout(this.user_data).subscribe((result) => {
            this.loginInBtn = "Login";
            sessionStorage.clear();
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
