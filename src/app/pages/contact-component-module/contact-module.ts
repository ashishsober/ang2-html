import { NgModule } from '@angular/core';
import { SharedModule } from '../../core/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    ContactRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    ContactComponent
  ],
  providers: []
  
})
export class ContactModule { }
