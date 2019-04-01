import { NgModule } from '@angular/core';
import { SharedModule } from '../../core/shared.module';
import { ManagementRoutingModule } from './management.routing';
import { ManagementComponent } from './management.component';
import { ManagementEditModalComponent } from '../../modals/management-edit-modal/management-edit-modal.component'
@NgModule({
  imports: [
    ManagementRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    ManagementComponent, ManagementEditModalComponent
  ],
  providers: [],
  entryComponents:[ManagementEditModalComponent]
  
})
export class ManagementModule { }
