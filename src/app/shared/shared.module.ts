import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppMaterialModule } from './app.material.module';


import { LoginbtnComponent } from './loginbtn-component/loginbtn.component';
import { AlertDialogComponent } from '../modals/alert-dialog/alert-dialog.component';
import { UserInfoModalComponent } from '../modals/user-info-modal/user-info-modal.component'
import { DataService } from './data.service';
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
        AppMaterialModule
    ],
    declarations: [ AlertDialogComponent, UserInfoModalComponent],
    providers: [ DataService ],//services to inject,
    entryComponents:[ AlertDialogComponent, UserInfoModalComponent]
})
export class SharedModule { }