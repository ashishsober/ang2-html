import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppMaterialModule } from './app.material.module';

import { HeaderComponent } from './header-component/header.component';
import { FooterComponent } from './footer-component/footer.component';
import { LoginbtnComponent } from './loginbtn-component/loginbtn.component';
import { ContactFormComponent } from './contact-form-component/contact-form.component';
import { AlertDialogComponent } from '../modals/alert-dialog/alert-dialog.component';
import { UserInfoModalComponent } from '../modals/user-info-modal/user-info-modal.component'

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
        LoginbtnComponent,
        ContactFormComponent
    ],
    declarations: [HeaderComponent, FooterComponent, LoginbtnComponent, ContactFormComponent, AlertDialogComponent, UserInfoModalComponent],
    providers: [],//services to inject,
    entryComponents:[AlertDialogComponent, UserInfoModalComponent]
})
export class SharedModule { }