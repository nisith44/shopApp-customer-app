import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewFoodPageRoutingModule } from './view-food-routing.module';

import { ViewFoodPage } from './view-food.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewFoodPageRoutingModule,ComponentsModule
  ],
  declarations: [ViewFoodPage]
})
export class ViewFoodPageModule {}
