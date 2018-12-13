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
  carrerModal = new carrerModal('','','','','',null,null,'','','','','','','','','','');

   obj={
     applicants:this.carrerModal,
     application:{
      "message": "",
      "response_type": "",
      "response_action": "",
      "stage":""
     }
   };
  showBasicForm =true;
  showEducationForm=false;
  showSuccessMsg=false;
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
  nightShiftboxData: Array<any> = [
      {
        "CODE_DESC": "Yes",
        "CODE_VALUE": "yes"
      },
      {
        "CODE_DESC": "No",
        "CODE_VALUE": "no"
      }
      ];

  onSubmit({ form, value,valid }: { form:NgForm ,value:string, valid: boolean },stage:string){
    this.obj.application.stage=stage;
    this.obj.applicants=this.carrerModal;
    console.log(this.obj);
    if(valid){
      this.spinner.show();
      this.dataService.postCareer(this.obj).subscribe((result) => {
        this.spinner.hide();
        this.carrerModal = result.applicants;
        this.showBasicForm=false;
        if(result.application.stage === 'ad'){
          this.showEducationForm=false;
          this.showSuccessMsg=true;
        } else {
          this.showEducationForm=true;
        }
      },err => {
        this.spinner.hide();
        console.log(err);
      });
    }
  }

  goBack(){
    this.showBasicForm =true;
    this.showEducationForm=false;
  }
  
}
