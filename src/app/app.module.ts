import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';

// Include the components we created
import { AppComponent } from './app.component';
import { AboutUsComponent } from './pages/about-us-component/aboutus.component';
import { AppRoutingModule } from './app-routing.module';
import { JobBoardComponent } from './pages/job-board/job-board.component';
import { AppEngineDevelopmentComponent } from './pages/app-engine-development-component/app-engine-development.component';
import { SoftwareDevelopmentComponent } from './pages/software-development-component/software-development.component';
import { SapSolutionsComponent } from './pages/sap-solutions-component/sap-solutions.component';
import { IOTComponent } from '../app/pages/iot-component/iot-component';
//Inculde the service we created
//import { DataService } from '../app/core/data.service';
import { AlertDialogComponent} from '../app/modals/alert-dialog/alert-dialog.component';
import { UserInfoModalComponent } from '../app/modals/user-info-modal/user-info-modal.component';
import { ManagementEditModalComponent } from './modals/management-edit-modal/management-edit-modal.component';
import { JobBoardEditModalComponent } from '../app/modals/job-board-edit-modal/job-board-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    JobBoardComponent,
    AppEngineDevelopmentComponent,
    SoftwareDevelopmentComponent,
    SapSolutionsComponent,
    IOTComponent,
    AlertDialogComponent,
    UserInfoModalComponent,
    ManagementEditModalComponent,
    JobBoardEditModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AlertDialogComponent, UserInfoModalComponent,ManagementEditModalComponent,JobBoardEditModalComponent]
})
export class AppModule { }
