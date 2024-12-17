import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MatCardModule } from '@angular/material/card';

Chart.register(...registerables)
@Component({
  selector: 'app-line-chart',
  imports: [MatCardModule],
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
          type: 'line', 
    
          data: {
            labels: ['January','February','March','April','May','June','July','August','September'],
            datasets: [{
              label: 'My First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40,30,45],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          },
          options: {
            aspectRatio:2.5,
            animations: {
              tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
              }
            }
          }
    
        });
  }
}
