import { Component, Output, EventEmitter, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DataService } from '../data.service';
import { AlertDialogComponent } from '../../modals/alert-dialog/alert-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UserInfoModalComponent } from '../../modals/user-info-modal/user-info-modal.component';
import { user_Data } from '../classes';
import { TokenService } from '../token.service';

@Component({
    selector: 'ngx-login-btn',
    templateUrl: './loginbtn.component.html',
    styleUrls: ['./loginbtn.component.scss']
})
export class LoginbtnComponent implements OnInit {
    alertDialogRef: MatDialogRef<AlertDialogComponent>;
    displayNone: boolean = false;//do not show the user image icon on initial load
    @Output() right50Event = new EventEmitter<boolean>();
    userInfoModalComponent: MatDialogRef<UserInfoModalComponent>;
    constructor(private router: Router, private dataService: DataService,
        private dialog: MatDialog, private zone: NgZone,
        private tokenService: TokenService) {
    }
    currentUser: user_Data;
    ngOnInit() {
        this.dataService.currentUser.subscribe(
            (userData) => {
                if(userData != undefined) {
                    console.log("at login button component");
                    this.currentUser = userData;
                }
            }
        );
    }

    googleAuth(value: string) {
        if (value === 'Login') {
            this.dataService.googleAuthCall();
        } else {
            this.logout();
        }
    }

    logout() {
        let obj = {
            applicants: {},
            application: {
                message: "",
                response_action: "logout"
            },
            client: {
                uid: this.dataService.getCurrentUser().uid,
                accessToken: this.tokenService.getToken(),
                emailId: "",
                photoUrl: "",
                displayName: ""
            }
        };
        this.dataService.logout(obj).subscribe((result) => {
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
