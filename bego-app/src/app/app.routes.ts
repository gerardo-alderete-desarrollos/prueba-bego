import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'orders',
        pathMatch:'full'
    },
    {
        path:'detail',
        loadChildren:()=> import('./pages/detail/detail.module').then(m=> m.DetailModule)
    },
    {
        path:'orders',
        loadChildren:()=> import('./pages/orders/orders.module').then(m=> m.OrdersModule),
    },

];
