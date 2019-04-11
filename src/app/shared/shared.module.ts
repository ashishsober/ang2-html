import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './app.material.module';
import { RouterModule } from '@angular/router';
import { AlertDialogComponent } from '../modals/alert-dialog/alert-dialog.component';
import { UserInfoModalComponent } from '../modals/user-info-modal/user-info-modal.component'
import { TokenService } from './token.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        AppMaterialModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        AppMaterialModule,
    ],
    declarations: [ AlertDialogComponent, UserInfoModalComponent],
    providers: [ TokenService ],//services to inject,
    entryComponents:[ AlertDialogComponent, UserInfoModalComponent]
})
export class SharedModule { }