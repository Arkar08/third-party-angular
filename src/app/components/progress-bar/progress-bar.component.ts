import { Component, Inject, OnInit } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
  selector: 'app-progress-bar',
  imports: [MatProgressBarModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent implements OnInit {
  message:any;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data:any){
    this.message = data;
  }
  ngOnInit(): void {

  }
}
