import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Hero } from '../../interfaces/hero.interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './confirm-dialog.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ConfirmDialogComponent {

  constructor (
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: Hero
  ) {}

  onNoClick() {
    this.dialogRef.close(false);
  }

  onConfirm() {
    this.dialogRef.close(true);
  }
 }
