import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'main',
        loadChildren: () => import('./../pages/main/main.module').then( m => m.MainPageModule)
      },
      {
        path: 'my-orders',
        loadChildren: () => import('./../pages/my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
      },
      {
        path: 'all-foods',
        loadChildren: () => import('./../pages/all-foods/all-foods.module').then( m => m.AllFoodsPageModule)
      },
      {
        path: 'my-account',
        loadChildren: () => import('./../pages/my-account/my-account.module').then( m => m.MyAccountPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
