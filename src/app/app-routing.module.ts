import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AboutUsComponent } from './pages/about-us-component/aboutus.component';
import { CareerComponent } from './pages/career-component/career.component'
import { ContactComponent } from './pages/contact-component/contact.component';
import { AppIntegrationComponent } from './pages/app-integration/app.integration.component';
const routes: Routes = [

  { path: '', component: AboutUsComponent },
  { path: 'careers', component: CareerComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'appIntegrationComponent', component: AppIntegrationComponent },
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