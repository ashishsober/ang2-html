import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppMaterialModule  } from './app.material.module';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// Include the components we created
import { AppComponent } from './app.component';
import { AboutUsComponent } from './pages/about-us-component/aboutus.component';
import { AppRoutingModule } from './app-routing.module';
import { CareerComponent } from './pages/career-component/career.component'
import { ContactComponent } from './pages/contact-component/contact.component';
import { AppIntegrationComponent } from './pages/app-integration/app.integration.component'
import { ManagementComponent } from './pages/management-component/management.component';
import { CustomerStoriesComponent } from './pages/customer-stories/customer-stories.component';
import { JobBoardComponent } from './pages/job-board/job-board.component';
import { AppEngineDevelopmentComponent } from './pages/app-engine-development-component/app-engine-development.component';
import { WorkflowComponent } from './pages/workflow-component/workflow.component';

import { SapSolutionsComponent } from './pages/sap-solutions-component/sap-solutions.component';
import { HeaderComponent } from './core/header-component/header.component';
import { FooterComponent } from '../app/core/footer-component/footer.component';
import { IOTComponent } from '../app/pages/iot-component/iot-component';
//Inculde the service we created
import { DataService } from '../app/core/data.service';



@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    CareerComponent,
    ContactComponent,
    AppIntegrationComponent,
    ManagementComponent,
    CustomerStoriesComponent,
    JobBoardComponent,
    AppEngineDevelopmentComponent,
    WorkflowComponent,
    SapSolutionsComponent,
    HeaderComponent,
    FooterComponent,
    IOTComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppMaterialModule,
    NgxSpinnerModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
