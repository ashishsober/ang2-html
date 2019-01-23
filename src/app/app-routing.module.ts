import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AboutUsComponent } from './pages/about-us-component/aboutus.component';
import { NetworkSecurityComponent } from './pages/network-security-component/network-security.component';
import { ManagementComponent } from './pages/management-component/management.component';
import { JobBoardComponent } from './pages/job-board/job-board.component';
import { AppEngineDevelopmentComponent } from './pages/app-engine-development-component/app-engine-development.component';
import { SoftwareDevelopmentComponent } from './pages/software-development-component/software-development.component';
import { SapSolutionsComponent } from './pages/sap-solutions-component/sap-solutions.component';
import { IOTComponent } from '../app/pages/iot-component/iot-component';

const routes: Routes = [
  { path: '', component: AboutUsComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'careers',loadChildren: './pages/career-component-module/career-module#CareerAppModule' },
  { path: 'contact', loadChildren: './pages/contact-component-module/contact-module#ContactAppModule' },
  { path: 'networkSecurity', component: NetworkSecurityComponent },
  { path: 'jobBoard', component: JobBoardComponent },
  { path: 'appEngineDevelopment', component: AppEngineDevelopmentComponent },
  { path: 'sapSolutions', component: SapSolutionsComponent },
  { path: 'softwareDevelopment', component: SoftwareDevelopmentComponent },
  { path: 'iot', component: IOTComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes,config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }