import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AlertDialogComponent } from '../../modals/alert-dialog/alert-dialog.component';
import { user_Data } from '../../shared/userData.modal';
import { TokenService } from '../../shared/token.service';
@Component({
  templateUrl: './user-info-modal.component.html',
  styleUrls: ['./user-info-modal.component.scss'],
})
export class UserInfoModalComponent implements OnInit {
  currentUser: user_Data
  alertDialogRef: MatDialogRef<AlertDialogComponent>;

  constructor(private dataService: DataService,
    private dialog: MatDialog,
    private tokenService: TokenService) { }

  ngOnInit() {
    this.currentUser = this.dataService.getCurrentUser();
  }

  logout() {
    let obj = {
      applicants: {},
      application: {
        message: "",
        response_action: ""
      },
      client: { 
        accessToken: this.tokenService.getToken()
      }
    };
    this.dataService.logout(obj).subscribe((result) => {
      console.log("logout sucessfully");
      this.dialog.closeAll();
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