import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppMaterialModule } from './app.material.module';

import { HeaderComponent } from './core/header-component/header.component';
import { FooterComponent } from './core/footer-component/footer.component';
import { LoginbtnComponent } from '../app/core/loginbtn-component/loginbtn.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AppMaterialModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        AppMaterialModule,
        HeaderComponent,
        FooterComponent,
        LoginbtnComponent
    ],
    declarations: [HeaderComponent,FooterComponent,LoginbtnComponent],
    providers: []//services to inject
})
export class SharedModule { }