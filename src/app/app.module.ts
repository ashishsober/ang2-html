import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';

// Include the components we created
import { AppComponent } from './app.component';
import { AboutUsComponent } from './pages/about-us-component/aboutus.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './pages/contact-component/contact.component';
import { NetworkSecurityComponent } from './pages/network-security-component/network-security.component'
import { ManagementComponent } from './pages/management-component/management.component';
import { JobBoardComponent } from './pages/job-board/job-board.component';
import { AppEngineDevelopmentComponent } from './pages/app-engine-development-component/app-engine-development.component';
import { SoftwareDevelopmentComponent } from './pages/software-development-component/software-development.component';
import { SapSolutionsComponent } from './pages/sap-solutions-component/sap-solutions.component';
import { IOTComponent } from '../app/pages/iot-component/iot-component';
//Inculde the service we created
//import { DataService } from '../app/core/data.service';
import { AlertDialogComponent} from '../app/core/dialog/alert-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    NetworkSecurityComponent,
    ManagementComponent,
    JobBoardComponent,
    AppEngineDevelopmentComponent,
    SoftwareDevelopmentComponent,
    SapSolutionsComponent,
    IOTComponent,
    AlertDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AlertDialogComponent]
})
export class AppModule { }
