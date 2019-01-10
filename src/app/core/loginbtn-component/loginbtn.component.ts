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
    userData = {
        accessToken: sessionStorage.getItem("accessToken"),
        uid: sessionStorage.getItem("user_uid")
    }
    @Output() right50Event = new EventEmitter<boolean>();

    constructor(private router: Router, private dataService: DataService,
        private dialog: MatDialog, private zone: NgZone, ) { }

    ngOnInit() {
        if (this.userData.accessToken != null || this.userData.uid != null) {
            this.dataService.authenticateEmp(this.userData).subscribe((result) => {
                if (result.length === 1) {
                    this.loginInBtn = "Logout";
                } else {
                    this.loginInBtn = "Login";
                }
            }, (err) => {
                console.log(err);
                this.errorModal(err);
            });
        } else {
            this.loginInBtn = "Login";
        }
    }


    //google auth call
    gsubmit(value: string) {
        if (value === 'Login') {
            this.dataService.getGoogleAuth()
                .then((result) => {
                    sessionStorage.setItem('photoUrl', result.user.photoURL);
                    sessionStorage.setItem('emalid', result.user.email);
                    this.saveUserCall(result.user);
                }, (err) => {
                    console.log(err);
                    this.errorModal(err);
                });
        } else {
            this.logout();
        }
    }


    //save user and accestoken call for the database
    saveUserCall(userData: any) {
        this.dataService.postEmployee(userData).subscribe((result) => {
            sessionStorage.setItem('user_uid', result.uid);
            sessionStorage.setItem('accessToken', result.accessToken);
            this.zone.run(() => {
                this.loginInBtn = "Logout";
            });
        }, (err) => {
            console.log(err);
            this.errorModal(err);
        });
    }

    logout() {
        this.dataService.logout(this.userData).subscribe((result) => {
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
