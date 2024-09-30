import { Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error-404-page/error-404-page.component';
import { authGuardActivate, authGuardMatch } from './auth/guards/auth.guard';
import { publicGuardActivate, publicGuardMatch } from './auth/guards/public.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then( m => m.routes ),
    canMatch: [ publicGuardMatch ],
    canActivate: [ publicGuardActivate ]
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.routes').then( m => m.routes ),
    canMatch: [ authGuardMatch ],
    canActivate: [ authGuardActivate ]
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
