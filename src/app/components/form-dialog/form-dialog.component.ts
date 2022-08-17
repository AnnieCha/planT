import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
   // public dialogRef: MatDialogRef<FormDialogComponent>,
  ) { }

}
