import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables)
@Component({
  selector: 'app-pie-chart',
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent implements OnInit {
  chart:any;
  constructor(){}
  ngOnInit(): void {
      this.createChart()
  }
  createChart(){
    this.chart = new Chart("MyPie", {
      type: 'pie',

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
