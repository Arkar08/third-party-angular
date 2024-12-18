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
  {fullName:'zawzaw',email:'zawzaw@gmail.com',phNo:"09388389483",dateOfBirth:'12/12/2024',isActive:false},
  {fullName:'zawzaw',email:'zawzaw@gmail.com',phNo:"09388389483",dateOfBirth:'12/12/2024',isActive:false},
  {fullName:'zawzaw',email:'zawzaw@gmail.com',phNo:"09388389483",dateOfBirth:'12/12/2024',isActive:false}
];


@Component({
  selector: 'app-list-table',
  imports: [MatTableModule,MatPaginatorModule,MatIconModule],
  templateUrl: './list-table.component.html',
  styleUrl: './list-table.component.css'
})
export class ListTableComponent {
  displayedColumns: string[] = ['fullName', 'email', 'phNo', 'dateOfBirth','isActive'];
  dataSource = ELEMENT_DATA;
}
