import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { AlertDialogComponent } from '../../core/dialog/alert-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'ngx-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  alertDialogRef: MatDialogRef<AlertDialogComponent>;
  constructor(private dataService:DataService,
              private dialog: MatDialog){}

  gsubmit() {
    this.dataService.getGoogleAuth()
      .then((result) => {
          this.saveUserCall(result.user);        
      },(err) => {
        console.log("google auth error--"+err);
        this.errorModal(err);
      });
  }
  
  saveUserCall(userData:any) {
    this.dataService.postEmployee(userData).subscribe((result) => {
      console.log("my result===="+result);
          // sessionStorage.setItem('user_uid', result.user.uid);
          // sessionStorage.setItem('user_photoUrl', result.user.photoURL);
          // sessionStorage.setItem('user_emalid', result.user.email);  
    },(err) => {
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
  //uid---Zg22X8LOQihr6gyBDLy7Lhy9HG83
}