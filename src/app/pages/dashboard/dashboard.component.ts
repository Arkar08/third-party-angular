import { Component } from '@angular/core';
import { BarChartComponent } from "../../components/bar-chart/bar-chart.component";
import { DonughnutChartComponent } from "../../components/donughnut-chart/donughnut-chart.component";
import { PieChartComponent } from "../../components/pie-chart/pie-chart.component";
import { LineChartComponent } from "../../components/line-chart/line-chart.component";
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-dashboard',
  imports: [BarChartComponent, DonughnutChartComponent, PieChartComponent, LineChartComponent,MatCardModule,MatGridListModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
