import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables)
@Component({
  selector: 'app-line-chart',
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent implements OnInit {
  chart:any;
  constructor(){}
  ngOnInit(): void {
      this.createChart()
  }
  createChart(){
    this.chart = new Chart("MyLine", {
          type: 'line', //this denotes tha type of chart
    
          data: {// values on X-Axis
            labels: ['January','February','March','April','May','June','July'],
            datasets: [{
              label: 'My First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          },
          options: {
            aspectRatio:2.5
          }
    
        });
  }
}
