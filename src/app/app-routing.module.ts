import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './pages/home-component/home.component';
import { CareerComponent } from './pages/career-component/career.component'
import { ContactComponent } from './pages/contact-component/contact.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'careers', component: CareerComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
// const config: ExtraOptions = {
//   useHash: true,
// };

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }