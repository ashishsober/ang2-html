import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagementService } from '../management.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AlertDialogComponent } from '../../../modals/alert-dialog/alert-dialog.component';
import { managementModal } from '../management.model';
import { MAT_DIALOG_DATA } from '@angular/material';
import { TokenService } from '../../../shared/token.service';

@Component({
  templateUrl: './management-edit-modal.component.html',
  styleUrls: ['./management-edit-modal.component.scss'],
})
export class ManagementEditModalComponent implements OnInit{
  managementModal: managementModal;
  alertDialogRef: MatDialogRef<AlertDialogComponent>;
  //user_Data: user_Data;

  constructor(private router: Router,
    private managementService: ManagementService,
    private dialog: MatDialog,private tokenService: TokenService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

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
      //this.showSpinner=true;
      //form.value.profileImage = 'assets/user-tie-solid.svg';
      obj.applicants = form.value;
      this.managementService.postManagement(obj).subscribe((result) => {
        //this.showSpinner=false;
        //this.showForm = false;
        this.dialog.closeAll();
        this.checkServerResponse(result, form);
      }, err => {
        //this.showSpinner=false;
        console.log(err);
        this.errorModal(err);
      });
    }
  }

  checkServerResponse(appData: any, form: NgForm) {
    let responseAction = appData.application.response_action.toUpperCase();
    const list = this.managementService.managementList;
    switch (responseAction) {
      case 'STOP':
      case 'HARD':
        this.errorModal(appData.application.message);
        break;
      case 'CONTINUE':
      case 'SUCCESS':
        const objIndex = list.findIndex((obj => obj._id == form.value._id));
        if (objIndex == -1) {
          this.managementService.managementList.push(appData.applicants);
        } else {
          list[objIndex] = form.value;
          this.managementService.managementList = list;
        }
        form.reset();
        break;
      default:
        //error modal to show  
        this.errorModal(appData.application.message);
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