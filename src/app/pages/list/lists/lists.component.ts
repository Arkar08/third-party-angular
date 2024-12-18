import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ListTableComponent } from "../../../components/list-table/list-table.component";
import { ActiveTableComponent } from "../../../components/active-table/active-table.component";
import { InactiveTableComponent } from "../../../components/inactive-table/inactive-table.component";

@Component({
  selector: 'app-lists',
  imports: [MatTabsModule, ListTableComponent, ActiveTableComponent, InactiveTableComponent],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent {

}
