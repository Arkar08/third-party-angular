import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { TableComponent } from "../../components/table/table.component";

@Component({
  selector: 'app-users',
  imports: [MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule, TableComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

}
