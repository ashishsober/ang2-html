import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../core/data.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AlertDialogComponent } from '../../modals/alert-dialog/alert-dialog.component';
import { managementModal } from '../../core/classes';
import { MAT_DIALOG_DATA } from '@angular/material';
import { user_Data, metaobject } from '../../core/classes';
@Component({
  templateUrl: './management-edit-modal.component.html',
  styleUrls: ['./management-edit-modal.component.scss'],
})
export class ManagementEditModalComponent implements OnInit{
  managementModal: managementModal;
  alertDialogRef: MatDialogRef<AlertDialogComponent>;
  user_Data: user_Data;

  constructor(private router: Router,
    private dataService: DataService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(){
    if (this.data == null) {
      this.managementModal = new managementModal('', '', '', 'assets/user-tie-solid.svg', '', '');
    } else {
      this.managementModal = new managementModal(this.data.name, this.data.emailid, this.data.position, this.data.profileImage, this.data.discription, this.data._id);
    }
    //var userModal = new user_Data();
    this.user_Data = this.dataService.getUserInfo()
  }

  onSubmit({ form, valid }: { form: NgForm, valid: boolean }) {
    let obj = {
      applicants: {},
      application: {
        message: "",
        response_action: ""
      },
      client: {
        uid: this.user_Data.uid,
        accessToken: this.user_Data.accessToken
      }
    };
    if (valid) {
      //this.showSpinner=true;
      //form.value.profileImage = 'assets/user-tie-solid.svg';
      obj.applicants = form.value;
      this.dataService.postManagement(obj).subscribe((result) => {
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
    const list = this.dataService.managementList;
    switch (responseAction) {
      case 'STOP':
      case 'HARD':
        this.errorModal(appData.application.message);
        break;
      case 'CONTINUE':
      case 'SUCCESS':
        const objIndex = list.findIndex((obj => obj._id == form.value._id));
        if (objIndex == -1) {
          this.dataService.managementList.push(appData.applicants);
        } else {
          list[objIndex] = form.value;
          this.dataService.managementList = list;
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