import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,MatBadgeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input()drawer:any;
}
