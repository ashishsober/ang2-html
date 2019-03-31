import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { JobBoardRoutingModule } from './job-board.routing';
import { JobBoardComponent } from './job-board.component';
@NgModule({
  imports: [
    JobBoardRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    JobBoardComponent
  ],
  providers: []
  
})
export class JobBoardModule { }
