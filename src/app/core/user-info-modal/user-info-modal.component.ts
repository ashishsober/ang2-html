import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../core/data.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AlertDialogComponent } from '../../core/dialog/alert-dialog.component';
import { user_Data } from '../classes';
@Component({
  templateUrl: './user-info-modal.component.html',
  styleUrls: ['./user-info-modal.component.scss'],
})
export class UserInfoModalComponent {
  user_data :user_Data
  alertDialogRef: MatDialogRef<AlertDialogComponent>;
  constructor(private router: Router,
    private dataService: DataService, private dialog: MatDialog) { 
      var userModal = new user_Data();
      this.user_data = userModal.getUserInfo()
    }

  logout() {
    this.dataService.logout(this.user_data).subscribe((result) => {
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