import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagementService } from '../management.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AlertDialogComponent } from '../../../modals/alert-dialog/alert-dialog.component';
import { managementModal } from '../management.model';
import { MAT_DIALOG_DATA } from '@angular/material';
import { TokenService } from '../../../shared/token.service';
import { management } from '../management.model';

@Component({
  templateUrl: './management-edit-modal.component.html',
  styleUrls: ['./management-edit-modal.component.scss'],
})
export class ManagementEditModalComponent implements OnInit{
  managementModal: managementModal;
  alertDialogRef: MatDialogRef<AlertDialogComponent>;

  constructor(
    private managementService: ManagementService,
    private tokenService: TokenService,
    @Inject(MAT_DIALOG_DATA) public data: management) { }

  ngOnInit(){
    if (this.data == null) {
      this.managementModal = new managementModal('', '', '', 'assets/user-tie-solid.svg', '', '');
    } else {
      this.managementModal = new managementModal(this.data.name, this.data.emailid, this.data.position, this.data.profileImage, this.data.discription, this.data._id);
    }
  }

  onSubmit({ form, valid }: { form: NgForm, valid: boolean }) {
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
    if (valid) {
      obj.applicants = form.value;
      this.managementService.addManagement(obj);
    }
  }
}