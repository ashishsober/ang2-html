import { NgModule } from '@angular/core';
import { SharedModule } from '../../core/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactFormComponent } from './contact-form-component/contact-form.component';
@NgModule({
  imports: [
    ContactRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    ContactComponent, ContactFormComponent
  ],
  providers: []
  
})
export class ContactModule { }
