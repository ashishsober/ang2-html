import { Component, Output, EventEmitter, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DataService } from '../data.service';
import { AlertDialogComponent } from '../../modals/alert-dialog/alert-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UserInfoModalComponent } from '../../modals/user-info-modal/user-info-modal.component';
import { user_Data } from '../classes';

@Component({
    selector: 'ngx-login-btn',
    templateUrl: './loginbtn.component.html',
    styleUrls: ['./loginbtn.component.scss']
})
export class LoginbtnComponent implements OnInit {
    alertDialogRef: MatDialogRef<AlertDialogComponent>;
    loginInBtn: string;
    displayNone: boolean = false;
    user_data: user_Data;
    @Output() right50Event = new EventEmitter<boolean>();
    userInfoModalComponent: MatDialogRef<UserInfoModalComponent>;
    
    constructor(private router: Router, private dataService: DataService,
        private dialog: MatDialog, private zone: NgZone) {
        var userModal = new user_Data();
        this.user_data = userModal.getUserInfo()
    }

    ngOnInit() {
        this.dataService.subject.subscribe((result) => {
            if (result != undefined) {
                this.showLogoutButton(result);
            }
        });

        let obj = {
            applicants: {},
            application: {
              message: "",
              response_action: ""
            },
            client: {
              uid: this.user_data.uid,
              accessToken: this.user_data.accessToken,
              emailId:"",
              photoUrl:"",
              displayName:""
            }
        };
        if (this.user_data.accessToken != null || this.user_data.uid != null) {
            this.dataService.authenticateEmp(obj).subscribe((result) => {
                if (result.application.response_action === "continue") {
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
        if (result != 'logout') {
            let photoUrl = result.client === undefined ? result.photos[0].value  :result.client.photoUrl;
            let email = result.client === undefined ? result.emails[0].value : result.client.emailId ;
            this.zone.run(() => {
                this.displayNone = true; //show the user_img
                this.user_data.photoURL = photoUrl;
                this.loginInBtn = "Logout";
            });
        } else {
            this.showLoginButton();
        }
    }

    //google auth call
    googleAuth(value: string) {
        if (value === 'Login') {
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

    infoModal() {
        this.userInfoModalComponent = this.dialog.open(UserInfoModalComponent, {
            hasBackdrop: true,
            height: '400px',
            width: '300px',
            position: { top: '65px', right: '15px' }
        });
    }
}
