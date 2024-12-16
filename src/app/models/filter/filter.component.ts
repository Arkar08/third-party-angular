import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogActions, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-filter',
  imports: [
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogActions,
    MatButtonModule
],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent implements OnInit {
  durationInSeconds = 3;
  constructor(private snackBar: MatSnackBar, private dialog:MatDialogRef<FilterComponent>) {}
  ngOnInit(): void {}
  filter() {
    this.snackBar.openFromComponent(ProgressBarComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      data: 'Filtering',
    });
    setTimeout(()=>{
      this.dialog.close()
    },3000)
  }

  reset() {
    this.snackBar.openFromComponent(ProgressBarComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      data: 'Reseting',
    });
    setTimeout(()=>{
      this.dialog.close()
    },3000)
  }
}
