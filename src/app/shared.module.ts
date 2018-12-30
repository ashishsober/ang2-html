import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './core/header-component/header.component';
import { AppMaterialModule } from './app.material.module';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { FooterComponent } from './core/footer-component/footer.component';
@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        AppMaterialModule
    ],
    exports: [
        AppMaterialModule,
        HeaderComponent,
        FooterComponent
    ],
    declarations: [HeaderComponent,FooterComponent],
    providers: []//services to inject
})
export class SharedModule { }