import { Component } from '@angular/core';
import { carrerModal } from '../../core/contactModal';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'ngv-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  carrerModal = new carrerModal('','','','','',null,null,'','','');
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
