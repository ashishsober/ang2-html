import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AlertDialogComponent } from '../../modals/alert-dialog/alert-dialog.component';
import { jobBoardModal } from '../../pages/job-board-module/job.model';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    templateUrl: './job-board-edit.component.html',
    styleUrls: ['./job-board-edit.component.scss'],
})
export class JobBoardEditModalComponent {
    jobBoardModal : jobBoardModal;
    alertDialogRef: MatDialogRef<AlertDialogComponent>;

    constructor(private dialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) public data: any) {

          if(data == null) {
            this.jobBoardModal = new jobBoardModal('', '', '', '','','',[]);
          } else {
            console.log("my selected data----"+data);
           // this.jobBoardModal = new jobBoardModal(data.title, data.location,data.jobType, data.experience,data.requirement,'');
          }
    }


    onSubmit({ form, valid }: { form: NgForm, valid: boolean }) {
        console.log(form.value);
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