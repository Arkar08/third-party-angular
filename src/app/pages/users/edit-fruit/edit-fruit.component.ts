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
  selector: 'app-edit-fruit',
  imports: [MatInputModule, MatFormFieldModule,MatGridListModule,MatSliderModule,MatSelectModule,MatButtonModule],
  templateUrl: './edit-fruit.component.html',
  styleUrl: './edit-fruit.component.css'
})
export class EditFruitComponent implements OnInit {
progressValue = 0;
  fruits:any;
  durationInSeconds = 3
  fruitOne:any;
  constructor(private router:Router,private snackBar:MatSnackBar){}
  ngOnInit(): void {
    this.fruits = Fruits;
    this.progressValue = 50;
    this.fruitOne = 'blueberry'
  }

  cancel(){
      this.snackBar.openFromComponent(ProgressBarComponent,{
        duration:this.durationInSeconds * 1000,
        horizontalPosition:"center",
        verticalPosition:"top",
        data:"Cancelling"
      })
    setTimeout(()=>{
      this.router.navigate(['/users/fruit'])
    },3000)
  }

  save(){
    this.snackBar.openFromComponent(ProgressBarComponent,{
      duration:this.durationInSeconds * 1000,
      horizontalPosition:"center",
      verticalPosition:"top",
      data:'Updating'
    })
    setTimeout(()=>{
      this.router.navigate(['/users/fruit'])
    },3000)
  }
}
