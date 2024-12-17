import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables)

@Component({
  selector: 'app-donughnut-chart',
  imports: [],
  templateUrl: './donughnut-chart.component.html',
  styleUrl: './donughnut-chart.component.css'
})
export class DonughnutChartComponent implements OnInit {
  chart:any;
  constructor(){}
  ngOnInit(): void {
      this.createChart()
  }
  createChart(){
    this.chart = new Chart("MyDonughnut", {
      type: 'doughnut', 

      data: {
        labels: ['Red', 'Pink','Green','Yellow','Orange','Blue', ],
           datasets: [{
    label: 'My First Dataset',
    data: [300, 240, 100, 432, 253, 34],
    backgroundColor: [
      'red',
      'pink',
      'green',
            'yellow',
      'orange',
      'blue',            
    ],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2.5
      }

    });
  }
}