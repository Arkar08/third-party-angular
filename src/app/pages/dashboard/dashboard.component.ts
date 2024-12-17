import { Component } from '@angular/core';
import { BarChartComponent } from "../../components/bar-chart/bar-chart.component";
import { DonughnutChartComponent } from "../../components/donughnut-chart/donughnut-chart.component";
import { PieChartComponent } from "../../components/pie-chart/pie-chart.component";
import { LineChartComponent } from "../../components/line-chart/line-chart.component";

@Component({
  selector: 'app-dashboard',
  imports: [BarChartComponent, DonughnutChartComponent, PieChartComponent, LineChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
