import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule  } from '../../app.material.module';
import { CareerRoutingModule } from './career-routing.module';
import { CareerComponent } from './career.component';
import { SharedModule } from '../../shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
