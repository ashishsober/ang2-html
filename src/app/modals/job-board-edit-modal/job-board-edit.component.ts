import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../core/data.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AlertDialogComponent } from '../../core/dialog/alert-dialog.component';
import { jobBoardModal } from '../../core/classes';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
    templateUrl: './job-board-edit.component.html',
    styleUrls: ['./job-board-edit.component.scss'],
})
export class JobBoardEditModalComponent {
    jobBoardModal : jobBoardModal;
    alertDialogRef: MatDialogRef<AlertDialogComponent>;

    constructor(private router: Router,
        private dataService: DataService,
        private dialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) public data: any) {

          if(data == null) {
            this.jobBoardModal = new jobBoardModal('', '', '', '',[],'');
          } else {
            console.log("my selected data----"+data);
            this.jobBoardModal = new jobBoardModal(data.title, data.location,data.jobType, data.experience,data.requirement,'');
          }
    }


    onSubmit({ form, valid }: { form: NgForm, valid: boolean }) {
        // const list = this.dataService.managementList;
        // if (valid) {
        //   //this.showSpinner=true;
        //   //form.value.profileImage = 'assets/user-tie-solid.svg';
        //   this.dataService.postManagement(form.value).subscribe((result) => {
        //     //this.showSpinner=false;
        //     //this.showForm = false;

        //     this.dialog.closeAll();
        //     const objIndex = list.findIndex((obj => obj._id == form.value._id));
        //     if(objIndex == -1){
        //       this.dataService.managementList.push(result.applicants);
        //     } else {
        //       list[objIndex] =form.value;
        //       this.dataService.managementList =list;
        //     }

        //     form.reset();
        //   }, err => {
        //     //this.showSpinner=false;
        //     console.log(err);
        //     this.errorModal(err);
        //   });
        // }
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