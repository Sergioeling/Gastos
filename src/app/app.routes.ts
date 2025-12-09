import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { WebPageInicio } from './modules/shared/website/web-page-inicio/web-page-inicio';

export const routes: Routes = [

    {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard-ctrl-routing.module').then(m => m.PanelAdminRoutingModule),
        canActivate: [authGuard]
    },
    {
        path: 'web',
        component: WebPageInicio,
        canActivate: [authGuard]
    },

    {
        path: '',
        redirectTo: 'web',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'web'
    }

];
