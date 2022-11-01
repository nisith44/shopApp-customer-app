import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from '../modals/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

const components=[
    NavbarComponent,LoginComponent
]


@NgModule({
    declarations: [...components],
    exports: [...components],
    imports: [ IonicModule,ReactiveFormsModule,FormsModule,CommonModule ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: []

})

export class ComponentsModule { }