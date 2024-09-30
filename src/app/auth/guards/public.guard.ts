import { inject } from '@angular/core';
import { Router, type CanActivateFn, type CanMatchFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs';

export const publicGuardMatch: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.checkAuth()
    .pipe(
      tap( isAuthenticated => {
        if( isAuthenticated ){
          router.navigate(['./'])
        }
      } ),
      map( isAuthenticated => !isAuthenticated )
    );
}

export const publicGuardActivate: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.checkAuth()
    .pipe(
      tap( isAuthenticated => {
        if( isAuthenticated ){
          router.navigate(['./'])
        }
      } ),
      map( isAuthenticated => !isAuthenticated )
    );
}
