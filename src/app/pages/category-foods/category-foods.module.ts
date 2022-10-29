import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryFoodsPageRoutingModule } from './category-foods-routing.module';

import { CategoryFoodsPage } from './category-foods.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryFoodsPageRoutingModule,ComponentsModule
  ],
  declarations: [CategoryFoodsPage]
})
export class CategoryFoodsPageModule {}
