import { Component ,Inject} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../core/data.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AlertDialogComponent } from '../../modals/alert-dialog/alert-dialog.component';
import { managementModal } from '../../core/classes';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  templateUrl: './management-edit-modal.component.html',
  styleUrls: ['./management-edit-modal.component.scss'],
})
export class ManagementEditModalComponent {
  managementModal : managementModal;
  alertDialogRef: MatDialogRef<AlertDialogComponent>;
  
  constructor(private router: Router,
    private dataService: DataService, private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      
      if(data == null) {
        this.managementModal = new managementModal('', '', '', 'assets/user-tie-solid.svg', '','');
      } else {
        console.log("my selected data----"+data);
        this.managementModal = new managementModal(data.name, data.emailid,data.position, data.profileImage,data.discription,data._id);
      }
      
  }

  
  onSubmit({ form, valid }: { form: NgForm, valid: boolean }) {
    const list = this.dataService.managementList;
    if (valid) {
      //this.showSpinner=true;
      //form.value.profileImage = 'assets/user-tie-solid.svg';
      this.dataService.postManagement(form.value).subscribe((result) => {
        //this.showSpinner=false;
        //this.showForm = false;
        
        this.dialog.closeAll();
        const objIndex = list.findIndex((obj => obj._id == form.value._id));
        if(objIndex == -1){
          this.dataService.managementList.push(result.applicants);
        } else {
          list[objIndex] =form.value;
          this.dataService.managementList =list;
        }
        
        form.reset();
      }, err => {
        //this.showSpinner=false;
        console.log(err);
        this.errorModal(err);
      });
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