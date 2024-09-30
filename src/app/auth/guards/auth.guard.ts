import { inject } from '@angular/core';
import { Router, type CanActivateFn, type CanMatchFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs';

export const authGuardMatch: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.checkAuth()
    .pipe(
      tap( isAuthenticated => {
        if( !isAuthenticated ){
          router.navigate(['./auth/login'])
        }
      } )
    );
};

export const authGuardActivate: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.checkAuth()
    .pipe(
      tap( isAuthenticated => {
        if( !isAuthenticated ){
          router.navigate(['./auth/login'])
        }
      } )
    );
};
