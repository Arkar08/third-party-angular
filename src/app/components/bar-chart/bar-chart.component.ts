import { Chart,registerables } from 'chart.js';
import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';
Chart.register(...registerables)
@Component({
  selector: 'app-bar-chart',
  imports: [MatCardModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent implements OnInit {
  chart:any;
  delay:any;
  constructor(){}
  ngOnInit(): void {
      this.createChart()
  }
  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'bar', 

      data: {
        labels: ['January','February','March','April','May','June','July','August','September'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40,30,45],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        maintainAspectRatio:false,
        aspectRatio:2.5,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        animation: {
          onComplete: () => {
            this.delay = true;
          },
          delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !this.delay) {
              delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
          },
        }
      }

    });
  }
}
