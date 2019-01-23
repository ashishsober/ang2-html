import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../core/data.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AlertDialogComponent } from '../../core/dialog/alert-dialog.component';
import { managementModal } from '../../core/classes';
@Component({
  templateUrl: './management-modal.component.html',
  styleUrls: ['./management-modal.component.scss'],
})
export class ManagementModalComponent {
  managementModal = new managementModal('', '', '', '', '');
  alertDialogRef: MatDialogRef<AlertDialogComponent>;
  
  constructor(private router: Router,
    private dataService: DataService, private dialog: MatDialog) {
  }

  
  onSubmit({ form, valid }: { form: NgForm, valid: boolean }) {
    if (valid) {
      //this.showSpinner=true;
      form.value.profileImage = 'assets/user-tie-solid.svg';
      this.dataService.postContact(form.value).subscribe((result) => {
        //this.showSpinner=false;
        //this.showForm = false;
        form.reset();
      }, err => {
        //this.showSpinner=false;
        console.log(err);
        this.errorModal(err);
      });
    }
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