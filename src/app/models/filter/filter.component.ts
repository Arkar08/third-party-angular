import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogActions, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';


const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

const PERCENT: string[]=[
  '0',
  '5',
  '10',
  '15',
  '20',
  '25',
  '30'
]

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
  fruits:any;
  users:any;
  percents:any;
  constructor(private snackBar: MatSnackBar, private dialog:MatDialogRef<FilterComponent>) {}
  ngOnInit(): void {
    this.fruits = FRUITS;
    this.users = NAMES;
    this.percents = PERCENT;
  }
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
