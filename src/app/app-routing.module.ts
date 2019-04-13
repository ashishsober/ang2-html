import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions,PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'management', loadChildren: './pages/management-module/management.module#ManagementModule'},
  { path: 'careers',loadChildren: './pages/career-component-module/career-module#CareerModule' },
  { path: 'contact', loadChildren: './pages/contact-module/contact-module#ContactModule' },
  { path: 'networkSecurity', loadChildren: './pages/network-security-module/network-security.module#NetworkSecurityModule' },
  { path: 'jobBoard', loadChildren: './pages/job-board-module/job-board.module#JobBoardModule' },
  { path: 'appEngineDevelopment', loadChildren:'./pages/app-engine-development-module/app-engine-development.module#AppEngineDevelopementModule' },
  { path: 'sapSolutions', loadChildren:'./pages/sap-solutions-module/sap-solutions.module#SapSolutionModule' },
  { path: 'softwareDevelopment', loadChildren:'./pages/software-development-module/software-development.module#SoftwareDevelopmentModule' },
  { path: 'iot', loadChildren:'./pages/iot-module/iot.module#IOTModule' }
  // { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: '**', redirectTo: '', pathMatch: 'full' }
];
const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }