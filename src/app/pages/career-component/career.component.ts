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

  onSubmit({ form, valid }: { form:NgForm , valid: boolean }){
    if(valid){
      console.log("submit career"+form.value);
    }
  }
}
