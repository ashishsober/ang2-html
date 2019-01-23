import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { ManagementModalComponent } from '../../modals/management-modal/management-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router'
import { DataService } from '../../core/data.service';

@Component({
  selector: 'ngv-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit{
  managementModalComponent: MatDialogRef<ManagementModalComponent>;
  user_email:string = sessionStorage.getItem("emailId") === null ? null : sessionStorage.getItem("emailId");
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>;

  constructor(private router: Router, public dataService: DataService,
    private dialog: MatDialog) { 
   }

  ngOnInit(){
    this.dataService.getManagement().subscribe((data)=>{
      console.log(data);
      this.dataService.managementList = data;
     },(error)=>{
        console.error(error);
     });

     this.dataService.subject.subscribe((data) => {
      if (data != undefined) {
        this.updateCurrentUserData(data);
      }
    });
  }

  updateCurrentUserData(data) {
    this.user_email = data === 'logout' ? null : data.emails[0].value;
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
    this.managementModalComponent = this.dialog.open(ManagementModalComponent, {
      hasBackdrop: true,
      height: '600px',
      width: '400px',
    });
  }

  deleteManage(value:any){
    const list = this.dataService.managementList;
    this.dataService.deleteManagement(value).subscribe((data)=>{
      const listArray=list.filter((item) => item._id !== value);
      this.dataService.managementList = listArray;
     },(error)=>{
        console.error(error);
     });
  }
  editManage(item:any) {
    this.managementModalComponent = this.dialog.open(ManagementModalComponent, {
      hasBackdrop: true,
      height: '600px',
      width: '400px',
      data: item
    });
  }
}
