import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { CareerRoutingModule } from './career-routing.module';
import { CareerComponent } from './career.component';

@NgModule({
  imports: [
    CareerRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    CareerComponent
  ],
  providers: []
  
})
export class CareerAppModule { }
