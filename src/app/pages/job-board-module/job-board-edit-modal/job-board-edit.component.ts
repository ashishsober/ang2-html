import { Component, Inject, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AlertDialogComponent } from '../../../modals/alert-dialog/alert-dialog.component';
import { jobBoardModal } from '../job.model';
import { MAT_DIALOG_DATA } from '@angular/material';
import { job_board } from '../job.model';
import { JobService } from '../jobs.service';
@Component({
    templateUrl: './job-board-edit.component.html',
    styleUrls: ['./job-board-edit.component.scss'],
})
export class JobBoardEditModalComponent implements OnInit{
    jobBoardModal: jobBoardModal;
    alertDialogRef: MatDialogRef<AlertDialogComponent>;
    job: job_board = {} as job_board;
    jobForm: FormGroup;

    constructor(private dialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) public data: job_board,
        private fb: FormBuilder,
        private jobService: JobService) {

        this.jobForm = this.fb.group({
            title: '',
            location: '',
            jobType: '',
            jobId: '',
            experience: '',
            _id: ''
        });

        this.job.requirement = [];
    }

    ngOnInit(){
        console.log(this.data);
    }

    onSubmit() {
        //update the model
        this.updateJobForm(this.jobForm.value);
        console.log("my form data to sent to server" + this.job);
        this.jobService.save(this.job).subscribe(
            (data) => {
                console.log("successfully created" + data)
                this.dialog.closeAll();
            },
            err => this.errorModal(err))
    }

    updateJobForm(values: Object) {
        Object.assign(this.job, values);
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