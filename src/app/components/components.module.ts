import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from './navbar/navbar.component';

const components=[
    NavbarComponent
]


@NgModule({
    declarations: [...components],
    exports: [...components],
    imports: [ IonicModule, ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: []

})

export class ComponentsModule { }