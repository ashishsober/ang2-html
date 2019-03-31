import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { ManagementRoutingModule } from './management.routing';
import { ManagementComponent } from './management.component';
@NgModule({
  imports: [
    ManagementRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    ManagementComponent
  ],
  providers: []
  
})
export class ManagementModule { }
