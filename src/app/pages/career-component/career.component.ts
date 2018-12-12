import { Component } from '@angular/core';
import { contactModal } from '../../core/contactModal';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'ngv-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  contactModal = new contactModal('','',null,'','','');
  genderboxData: Array<any> = [
    {
      "CODE_DESC": "Male",
      "CODE_VALUE": "male"
    },
    {
      "CODE_DESC": "Female",
      "CODE_VALUE": "female"
    }
    ];
  onSubmit({ form, valid }: { form:NgForm , valid: boolean }){
    if(valid){
      console.log("submit career"+form.value);
    }
  }
}
