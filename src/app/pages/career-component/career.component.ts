import { Component } from '@angular/core';
import { carrerModal } from '../../core/classes';
import { NgForm } from '@angular/forms';
import { DataService } from '../../core/data.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AlertDialogComponent } from '../../core/dialog/alert-dialog.component';

@Component({
  selector: 'ngv-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  carrerModal = new carrerModal('', '', '', '', '', null, null, '', '', '', '', '', '', '', '', '', '');
  alertDialogRef: MatDialogRef<AlertDialogComponent>;
  obj = {
    applicants: this.carrerModal,
    application: {
      "message": "",
      "response_type": "",
      "response_action": "",
      "stage": ""
    }
  };
  showBasicForm = true;
  showEducationForm = false;
  showSuccessMsg = false;
  showSpinner=false;

  constructor(private dataService: DataService,
    private dialog: MatDialog) { }

  genderboxData: Array<any> = this.dataService.genderboxData;
  nightShiftboxData: Array<any> = this.dataService.nightShiftboxData;


  onSubmit({ form, value, valid }: { form: NgForm, value: string, valid: boolean }, stage: string) {
    this.obj.application.stage = stage;
    this.obj.applicants = this.carrerModal;
    console.log(this.obj);
    if (valid) {
      this.showSpinner=true;
      this.dataService.postCareer(this.obj).subscribe((result) => {
        this.showSpinner=false;
        this.carrerModal = result.applicants;
        this.showBasicForm = false;
        if (result.application.stage === 'ad') {
          this.showEducationForm = false;
          this.showSuccessMsg = true;
        } else {
          this.showEducationForm = true;
        }
      }, err => {
        this.showSpinner=false;
        console.log(err);
        this.errorModal(err);
      });
    }
  }

  goBack() {
    this.showBasicForm = true;
    this.showEducationForm = false;
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
