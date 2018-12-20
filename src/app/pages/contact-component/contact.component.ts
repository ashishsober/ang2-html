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
  contactModal = new contactModal('','',null,'','','');
  hide:boolean=false;
  showForm=true;
  alertDialogRef: MatDialogRef<AlertDialogComponent>;
  constructor(private dataService:DataService,
              private spinner:NgxSpinnerService,
              private dialog: MatDialog){}

  selectboxData: Array<any> = [
  {
    "CODE_DESC": "App Engine Development",
    "CODE_VALUE": "app_engine_development"
  },
  {
    "CODE_DESC": "Software Development",
    "CODE_VALUE": "software_development"
  },
  {
    "CODE_DESC": "ERP Solution",
    "CODE_VALUE": "erp_solution"
  },
  {
    "CODE_DESC": "Cloud Computing",
    "CODE_VALUE": 'cloud_computing'
  },
  {
    "CODE_DESC": "IOT",
    "CODE_VALUE": 'iot'
  },
  {
    "CODE_DESC": "Other",
    "CODE_VALUE": "other"
  }
  ];
  contact_address: Array<any> = [{
    "office": "Regd. OFFICE",//mandatory fields
    "address_line1": "127 Vaishali Nagar,",//mandatory fields
    "address_line2": "Bhopal (M.P) / India 4620016",//mandatory fields
    "address_line3": "",
    "address_line4": "",
    "contact": "0755-4272034",
    "email_id": ""
  },
  {
    "office": "ADMIN OFFICE",
    "address_line1": "17 Malviya Nagar , ",
    "address_line2": "Bhopal (M.P) / India ",
    "address_line3": "",
    "address_line4": "",
    "contact": "0755-4276923",
    "email_id": ""
  },
  {
    "office": "DELHI",
    "address_line1": "1201 NIRMAL TOWER",
    "address_line2": "Barakhamba Road",
    "address_line3": "New Delhi, India 110 001",
    "address_line4": "",
    "contact": "",
    "email_id": "contact@vrdnetwork.com"
  },
  {
    "office": "BANGALORE",
    "address_line1": "Manyata Embassy Business Park",
    "address_line2": "Ground Floor, E1 Block, Beech Building",
    "address_line3": "Outer Ring Road",
    "address_line4": "Bangalore - (Karnataka) India 560 045",
    "contact": "080-4276-4665",
    "email_id": "hr@vrdnetwork.com"
  }];


  onselect(event: MatOptionSelectionChange) {
    if (event.source.selected) {
      if(event.source.value ==='other'){
        this.hide=true; //making visible,field should be blank
        this.contactModal.other=null;
      } else {
        this.hide=false;
        this.contactModal.other=null;
      }
    }
  }

  onSubmit({ form, valid }: { form:NgForm , valid: boolean }){
    if(valid){
      this.spinner.show();
      this.dataService.postContact(form.value).subscribe((result) => {
        this.spinner.hide();
        this.showForm=false;
        form.reset();
      },err => {
        this.spinner.hide();
        console.log(err);
        this.errorModal(err);
      });
    }
  }

  log(x:any){
    console.log(x);
  }
  numberval = true;
  onKey(evt: any) {
    if (this.contactModal.phone_no.toString().length >= 10) {
      this.numberval= true;
    }
  }

  checkServerResponse(appData:any,form:NgForm) {
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


  errorModal(err:any) {
    this.alertDialogRef = this.dialog.open(AlertDialogComponent, {
      hasBackdrop: true,
      height: '316px',
      width: '874px',
      disableClose: true,
      data: err
    });
  }


}
