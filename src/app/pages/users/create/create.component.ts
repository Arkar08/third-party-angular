import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ProgressBarComponent } from '../../../components/progress-bar/progress-bar.component';


const Fruits: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
@Component({
  selector: 'app-create',
  imports: [MatInputModule, MatFormFieldModule,MatGridListModule,MatSliderModule,MatSelectModule,MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  progressValue = 0;
  fruits:any;
  durationInSeconds = 3
  constructor(private router:Router,private snackBar:MatSnackBar){}
  ngOnInit(): void {
    this.fruits = Fruits;
  }

  cancel(){
      this.snackBar.openFromComponent(ProgressBarComponent,{
        duration:this.durationInSeconds * 1000,
        horizontalPosition:"center",
        verticalPosition:"top",
        data:"Cancelling"
      })
    setTimeout(()=>{
      this.router.navigate(['/users'])
    },3000)
  }

  save(){
    this.snackBar.openFromComponent(ProgressBarComponent,{
      duration:this.durationInSeconds * 1000,
      horizontalPosition:"center",
      verticalPosition:"top",
      data:'Saving'
    })
    setTimeout(()=>{
      this.router.navigate(['/users'])
    },3000)
  }
}
