import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AboutUsComponent } from './pages/about-us-component/aboutus.component';
import { CareerComponent } from './pages/career-component/career.component'
import { ContactComponent } from './pages/contact-component/contact.component';
import { AppIntegrationComponent } from './pages/app-integration/app.integration.component';
import { ManagementComponent } from './pages/management-component/management.component';
import { CustomerStoriesComponent } from './pages/customer-stories/customer-stories.component';
import { JobBoardComponent } from './pages/job-board/job-board.component';
import { AppEngineDevelopmentComponent } from './pages/app-engine-development-component/app-engine-development.component';
import { WorkflowComponent } from './pages/workflow-component/workflow.component';
import { SapSolutionsComponent } from './pages/sap-solutions-component/sap-solutions.component';
import { IOTComponent } from '../app/pages/iot-component/iot-component';

const routes: Routes = [

  { path: '', component: AboutUsComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'careers', component: CareerComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'appIntegration', component: AppIntegrationComponent },
  { path: 'customerStories', component: CustomerStoriesComponent },
  { path: 'jobBoard', component: JobBoardComponent },
  { path: 'appEngineDevelopment', component: AppEngineDevelopmentComponent },
  { path: 'sapSolutions', component: SapSolutionsComponent },
  { path: 'workflow', component: WorkflowComponent },
  
  { path: 'iot', component: IOTComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes ,config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }