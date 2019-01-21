import { Component } from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material'
import { contactModal } from '../../core/classes';
import { NgForm } from '@angular/forms';
import { DataService } from '../../core/data.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AlertDialogComponent } from '../../core/dialog/alert-dialog.component';



@Component({
  selector: 'ngv-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  //contactModal = new contactModal('', '', null, '', '', '');
  //hide: boolean = false;
  //showForm = true;
  //alertDialogRef: MatDialogRef<AlertDialogComponent>;
  //selectboxData: Array<any> = this.dataService.technologiesSelectboxData;
  contact_address: Array<any> = this.dataService.contact_address;
  //showSpinner=false;

  constructor(private dataService:DataService) { }

 
}
