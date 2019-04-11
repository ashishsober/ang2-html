import { Component, OnInit,TemplateRef, ViewChild, OnDestroy } from '@angular/core';
import { ManagementEditModalComponent } from '../../modals/management-edit-modal/management-edit-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router'
import { ManagementService } from './management.service';
import { DataService } from '../../shared/data.service';
import { user_Data } from '../../shared/classes';


@Component({
  selector: 'ngv-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  ManagementEditModalComponent: MatDialogRef<ManagementEditModalComponent>;
  currentUser:user_Data;
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>;

  constructor(private router: Router, public managementService: ManagementService,
    private dialog: MatDialog,
    private dataService: DataService) { 
   }

  ngOnInit(){
    this.managementService.getManagement().subscribe((data)=>{
      console.log(data);
      this.managementService.managementList = data;
     },(error)=>{
        console.error(error);
     }); 
  }

  openDialog(id:any): void {
    const dialogRef = this.dialog.open(this.callAPIDialog);
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'yes'){
        //alert("dialog closed"+id);
         this.deleteManage(id);
      }
    });
  }


  addManagement(){
    this.ManagementEditModalComponent = this.dialog.open(ManagementEditModalComponent, {
      hasBackdrop: true,
      height: '600px',
      width: '400px',
    });
  }

  deleteManage(value:any){
    const list = this.managementService.managementList;
    this.managementService.deleteManagement(value).subscribe((data)=>{
      const listArray=list.filter((item) => item._id !== value);
      this.managementService.managementList = listArray;
     },(error)=>{
        console.error(error);
     });
  }
  editManage(item:any) {
    this.ManagementEditModalComponent = this.dialog.open(ManagementEditModalComponent, {
      hasBackdrop: true,
      height: '600px',
      width: '400px',
      data: item
    });
  }

//   ngOnDestroy(){
//     this.subjectRegistered.unsubscribe(); 
//  }
}
