import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../core/data.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AlertDialogComponent } from '../../core/dialog/alert-dialog.component';
@Component({
  templateUrl: './user-info-modal.component.html',
  styleUrls: ['./user-info-modal.component.scss'],

})
export class UserInfoModalComponent {
  user_data = {
    accessToken: sessionStorage.getItem("accessToken"),
    uid: sessionStorage.getItem("user_uid"),
    photoURL: sessionStorage.getItem("photoUrl") === null ? "" : sessionStorage.getItem("photoUrl"),
    emailId: sessionStorage.getItem("emailId") === null ? "" : sessionStorage.getItem("emailId"),
    displayName:sessionStorage.getItem("displayName") === null ? "" : sessionStorage.getItem("displayName"),
  }
  alertDialogRef: MatDialogRef<AlertDialogComponent>;
  constructor(private router: Router,
    private dataService: DataService, private dialog: MatDialog) { }

  logout() {
    this.user_data = {
      accessToken: sessionStorage.getItem("accessToken"),
      uid: sessionStorage.getItem("user_uid"),
      photoURL: sessionStorage.getItem("photoUrl"),
      emailId: sessionStorage.getItem("emailId"),
      displayName:sessionStorage.getItem("displayName")
    }
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