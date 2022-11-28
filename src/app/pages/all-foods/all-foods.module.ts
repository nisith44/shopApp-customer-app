import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllFoodsPageRoutingModule } from './all-foods-routing.module';

import { AllFoodsPage } from './all-foods.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllFoodsPageRoutingModule,ComponentsModule
  ],
  declarations: [AllFoodsPage]
})
export class AllFoodsPageModule {}
