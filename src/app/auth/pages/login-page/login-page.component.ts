import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class LoginPageComponent {

  constructor( private authService: AuthService, private router: Router ) {}

  onLogin() {
    this.authService.login('camilo@gmail.com', '12345')
      .subscribe( user => {
        this.router.navigate(['/'])
      } )
  }
 }
