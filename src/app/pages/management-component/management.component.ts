import { Component, OnInit } from '@angular/core';
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
  manageData = [];
  // managementList = [{
  //   name: "Vivek Kumar",
  //   position: "Chairman & CEO",
  //   profileImage: "assets/vivek_sir.jpeg",
  //   discription: "As Chief Executive Officer of VRD NETWORK, Under his leadership VRD NETWORK has broadened its offerings while maintaining a culture of strong innovation. His background uniquely prepares him to lead VRD NETWORK towards technological solutions that focus on users.",
  //   emailid: "director@vrdnetwork.com"
  // },
  // {
  //   name: "P. VENKAT",
  //   position: "Associate Director -  Delivery, Resource Management",
  //   profileImage: "assets/user-tie-solid.svg",
  //   discription: "Oversee , implement and manage the Recruitment process of compamy. Responsible for the planning, design and implementation of cost effective employee benefit programs consistent with the Company’s objectives for employees.",
  //   emailid: "hr@vrdnetwork.com"
  // },
  // {
  //   name: "PRANJUL",
  //   position: "HR Executive",
  //   profileImage: "assets/user-tie-solid.svg",
  //   discription: "Having worked across industries in both MNC and startup ecosystems, Pranjul assets fine knowledge of employee relations and training. She oversees planning, directing & coordinating administrative functions to set up a strong governance and execution function and build high-end capabilities focusing on long term growth.",
  //   emailid: "pranjul@vrdnetwork.com "
  // }]
  constructor(private router: Router, private dataService: DataService,
    private dialog: MatDialog) { 
   }

  ngOnInit(){
    this.dataService.getManagement().subscribe((data)=>{
      console.log(data);
      this.dataService.managementList = data;
      this.manageData = data;
     },(error)=>{
        console.error(error);
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
    this.dataService.deleteManagement(value).subscribe((data)=>{
      console.log(data);
      //this.dataService.managementList = data;
      //this.manageData = data;
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
