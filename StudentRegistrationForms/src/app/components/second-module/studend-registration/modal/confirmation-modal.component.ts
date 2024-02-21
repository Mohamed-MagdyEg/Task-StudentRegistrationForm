import { Component } from '@angular/core';
import {  MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss'
})
export class ConfirmationModalComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmationModalComponent>) {}

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}
