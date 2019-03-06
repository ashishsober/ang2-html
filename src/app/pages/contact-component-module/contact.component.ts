import { Component } from '@angular/core';
import { DataService } from '../../core/data.service';




@Component({
  selector: 'ngv-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
contact_address: Array<any> = this.dataService.contact_address;
constructor(private dataService:DataService) { }
}
