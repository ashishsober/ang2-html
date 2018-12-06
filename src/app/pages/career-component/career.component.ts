import { Component } from '@angular/core';
import { contactModal } from '../../core/contactModal';
@Component({
  selector: 'ngv-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  contactModal = new contactModal('','',null,'','','');
}
