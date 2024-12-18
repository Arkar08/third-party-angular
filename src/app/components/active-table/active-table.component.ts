import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

export interface PeriodicElement {
  fullName:string;
  email:string;
  phNo:string;
  dateOfBirth:string;
  isActive:boolean
}

const ELEMENT_DATA: PeriodicElement[] = [
  {fullName:'zawzaw',email:'zawzaw@gmail.com',phNo:"09388389483",dateOfBirth:'12/12/2024',isActive:true},
  {fullName:'zawzaw',email:'zawzaw@gmail.com',phNo:"09388389483",dateOfBirth:'12/12/2024',isActive:true},
  {fullName:'zawzaw',email:'zawzaw@gmail.com',phNo:"09388389483",dateOfBirth:'12/12/2024',isActive:true},
  {fullName:'zawzaw',email:'zawzaw@gmail.com',phNo:"09388389483",dateOfBirth:'12/12/2024',isActive:true},
];



@Component({
  selector: 'app-active-table',
  imports: [MatTableModule,MatPaginatorModule,MatIconModule],
  templateUrl: './active-table.component.html',
  styleUrl: './active-table.component.css'
})
export class ActiveTableComponent {
  displayedColumns: string[] = ['fullName', 'email', 'phNo', 'dateOfBirth','isActive'];
  dataSource = ELEMENT_DATA;
}
