import { Component, OnInit, TemplateRef, ViewChild, OnDestroy } from '@angular/core';
import { ManagementEditModalComponent } from './management-edit-modal/management-edit-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ManagementService } from './management.service';
import { user_Data } from '../../shared/userData.modal';


@Component({
  selector: 'ngv-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  ManagementEditModalComponent: MatDialogRef<ManagementEditModalComponent>;
  currentUser: user_Data;
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>;

  constructor(public managementService: ManagementService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.managementService.getManagement().subscribe((data) => {
      this.managementService.managementList = data;
    }, (error) => {
      console.error(error);
    });
  }

  openDialog(id: any): void {
    const dialogRef = this.dialog.open(this.callAPIDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        //alert("dialog closed"+id);
        this.deleteManage(id);
      }
    });
  }


  addManagement() {
    this.ManagementEditModalComponent = this.dialog.open(ManagementEditModalComponent, {
      hasBackdrop: true,
      height: '600px',
      width: '400px',
    });
  }

  deleteManage(value: any) {
    const list = this.managementService.managementList;
    this.managementService.deleteManagement(value).subscribe((data) => {
      const listArray = list.filter((item) => item._id !== value);
      this.managementService.managementList = listArray;
    }, (error) => {
      console.error(error);
    });
  }

  editManage(item: any) {
    this.ManagementEditModalComponent = this.dialog.open(ManagementEditModalComponent, {
      hasBackdrop: false,
      height: '600px',
      width: '400px',
      data: item
    });
  }
}
