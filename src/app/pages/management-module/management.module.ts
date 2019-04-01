import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ManagementRoutingModule } from './management.routing';
import { ManagementComponent } from './management.component';
import { ManagementEditModalComponent } from '../../modals/management-edit-modal/management-edit-modal.component';
import { ManagementService } from './management.service';

@NgModule({
  imports: [
    ManagementRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    ManagementComponent, ManagementEditModalComponent
  ],
  providers: [ ManagementService ],
  entryComponents:[ManagementEditModalComponent]
  
})
export class ManagementModule { }
