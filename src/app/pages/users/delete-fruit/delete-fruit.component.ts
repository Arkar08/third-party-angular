import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ProgressBarComponent } from '../../../components/progress-bar/progress-bar.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-fruit',
  imports: [MatButtonModule],
  templateUrl: './delete-fruit.component.html',
  styleUrl: './delete-fruit.component.css'
})
export class DeleteFruitComponent implements OnInit {
  durationInSeconds = 3
  constructor(private snackBar:MatSnackBar,private dialogRef:MatDialogRef<DeleteFruitComponent>){}
  ngOnInit(): void {
      
  }
  cancel(){
        this.snackBar.openFromComponent(ProgressBarComponent,{
          duration:this.durationInSeconds * 1000,
          horizontalPosition:"center",
          verticalPosition:"top",
          data:"Cancelling"
        })
      setTimeout(()=>{
        this.dialogRef.close()
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
        this.dialogRef.close()
      },3000)
    }
}
