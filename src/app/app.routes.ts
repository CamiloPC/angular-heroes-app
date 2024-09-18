import { Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error-404-page/error-404-page.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then( m => m.routes )
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.routes').then( m => m.routes )
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
