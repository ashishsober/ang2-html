import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AboutUsComponent } from './pages/about-us-component/aboutus.component';
import { SoftwareDevelopmentComponent } from './pages/software-development-component/software-development.component';
import { IOTComponent } from '../app/pages/iot-component/iot-component';

const routes: Routes = [
  { path: '', component: AboutUsComponent },
  { path: 'management', loadChildren: './pages/management-module/management.module#ManagementModule'},
  { path: 'careers',loadChildren: './pages/career-component-module/career-module#CareerAppModule' },
  { path: 'contact', loadChildren: './pages/contact-component-module/contact-module#ContactAppModule' },
  { path: 'networkSecurity', loadChildren: './pages/network-security-module/network-security.module#NetworkSecurityModule' },
  { path: 'jobBoard', loadChildren: './pages/job-board-module/job-board.module#JobBoardModule' },
  { path: 'appEngineDevelopment', loadChildren:'./pages/app-engine-development-module/app-engine-development.module#AppEngineDevelopementModule' },
  { path: 'sapSolutions', loadChildren:'./pages/sap-solutions-module/sap-solutions.module#SapSolutionModule' },
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