import { Component } from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material'
import { contactModal } from '../../core/contactModal';
import { NgForm } from '@angular/forms';
import { DataService } from '../../core/data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AlertDialogComponent } from '../../dialog/alert-dialog.component';



@Component({
  selector: 'ngv-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactModal = new contactModal('', '', null, '', '', '');
  hide: boolean = false;
  showForm = true;
  alertDialogRef: MatDialogRef<AlertDialogComponent>;
  selectboxData: Array<any> = this.dataService.technologiesSelectboxData;
  contact_address: Array<any> = this.dataService.contact_address;

  constructor(private dataService: DataService,
    private spinner: NgxSpinnerService,
    private dialog: MatDialog) { }

  onselect(event: MatOptionSelectionChange) {
    if (event.source.selected) {
      if (event.source.value === 'other') {
        this.hide = true; //making visible,field should be blank
        this.contactModal.other = null;
      } else {
        this.hide = false;
        this.contactModal.other = null;
      }
    }
  }

  onSubmit({ form, valid }: { form: NgForm, valid: boolean }) {
    if (valid) {
      this.spinner.show();
      this.dataService.postContact(form.value).subscribe((result) => {
        this.spinner.hide();
        this.showForm = false;
        form.reset();
      }, err => {
        this.spinner.hide();
        console.log(err);
        this.errorModal(err);
      });
    }
  }

  log(x: any) {
    console.log(x);
  }

  numberval = true;

  onKey(evt: any) {
    if (this.contactModal.phone_no.toString().length >= 10) {
      this.numberval = true;
    }
  }

  checkServerResponse(appData: any, form: NgForm) {
    let applicationStatus = appData.application.response_type.toUpperCase(); //info
    let responseAction = appData.application.response_action.toUpperCase();
    switch (responseAction) {
      case 'STOP':
        this.errorModal(appData);
        break;
      case 'CONTINUE':
      case 'SUCCESS':
        this.errorModal(appData);
        form.reset();
        break;
      default:
        //error modal to show  
        this.errorModal(appData);
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
