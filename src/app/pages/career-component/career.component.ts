import { Component } from '@angular/core';
import { carrerModal } from '../../core/contactModal';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from '../../core/data.service';


@Component({
  selector: 'ngv-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  carrerModal = new carrerModal('','','','','',null,null,'','','');
  showBasicForm =true;
  constructor(private dataService:DataService,
              private spinner:NgxSpinnerService){}

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
      this.spinner.show();
      this.dataService.postCareer(form.value).subscribe((result) => {
        this.spinner.hide();
        this.showBasicForm=false;
        form.reset();
      },err => {
        this.spinner.hide();
        console.log(err);
      });
    }
  }
  
}
