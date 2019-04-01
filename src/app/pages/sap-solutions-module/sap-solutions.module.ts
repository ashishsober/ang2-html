import { NgModule } from '@angular/core';
import { SharedModule } from '../../core/shared.module';
import { SapSolutionRoutingModule } from './sap-solutions.routing';
import { SapSolutionsComponent } from './sap-solutions.component';
@NgModule({
  imports: [
    SapSolutionRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    SapSolutionsComponent
  ],
  providers: []
  
})
export class SapSolutionModule { }
