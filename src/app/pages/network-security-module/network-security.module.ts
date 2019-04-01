import { NgModule } from '@angular/core';
import { SharedModule } from '../../core/shared.module';
import { NetworkSecurityComponent } from './network-security.component';
import { NetworkSecurityRoutingModule } from './network-security.routing';
@NgModule({
  imports: [
    NetworkSecurityRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    NetworkSecurityComponent
  ],
  providers: []
  
})
export class NetworkSecurityModule { }
