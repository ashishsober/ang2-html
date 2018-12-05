import { Component } from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material'
import { contactModal } from '../../core/contactModal';
import { NgForm } from '@angular/forms';
import { DataService } from '../../core/data.service';
import { from } from 'rxjs';
@Component({
  selector: 'ngv-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactModal = new contactModal('','',null,'','','');
  constructor(private dataService:DataService){}
  selectboxData: Array<any> = [{
    "CODE_DESC": "Google Apps",
    "CODE_VALUE": 'google_apps'
  },
  {
    "CODE_DESC": "Cloud Computing",
    "CODE_VALUE": 'cloud_computing'
  },
  {
    "CODE_DESC": "App Engine Development",
    "CODE_VALUE": "app_engine_development"
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
    "office": "BANGALORE",
    "address_line1": "Manyata Embassy Business Park",
    "address_line2": "Ground Floor, E1 Block, Beech Building",
    "address_line3": "Outer Ring Road",
    "address_line4": "Bangalore - (Karnataka) India 560 045",
    "contact": "080-4276-4665",
    "email_id": "hr@vrdnetwork.com"
  },
  {
    "office": "DELHI",
    "address_line1": "1201 NIRMAL TOWER",
    "address_line2": "Barakhamba Road",
    "address_line3": "New Delhi, India 110 001",
    "address_line4": "",
    "contact": "",
    "email_id": "contact@vrdnetwork.com"
  }];

  hide:boolean=false;
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
      console.log(form.value);
      this.dataService.postContact(form.value).subscribe((result) => {
        console.log("hello my result---"+result);
        form.reset();
      },err => {
        console.log(err);
      });
    } else {
      return;
    }
  }

  log(x){
    console.log(x);
  }


}
