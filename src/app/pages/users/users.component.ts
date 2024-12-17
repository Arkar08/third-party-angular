import { Component,OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatDialog,MatDialogModule} from '@angular/material/dialog'
import { TableComponent } from "../../components/table/table.component";
import { FilterComponent } from '../../models/filter/filter.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule, TableComponent,MatDialogModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  constructor(private dialog:MatDialog,private router:Router){}
  ngOnInit(): void {
      
  }
  filter(){
    this.dialog.open(FilterComponent,{
      width:'900px',
      height: '350px'
    })
  }

  create(){
    this.router.navigate(['users/create'])
  }
}
