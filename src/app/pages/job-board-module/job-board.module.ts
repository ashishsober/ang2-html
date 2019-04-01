import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { JobBoardRoutingModule } from './job-board.routing';
import { JobBoardComponent } from './job-board.component';
import { JobBoardEditModalComponent } from '../../modals/job-board-edit-modal/job-board-edit.component';
@NgModule({
  imports: [
    JobBoardRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    JobBoardComponent,JobBoardEditModalComponent
  ],
  providers: [],
  entryComponents:[JobBoardEditModalComponent]
  
})
export class JobBoardModule { }
