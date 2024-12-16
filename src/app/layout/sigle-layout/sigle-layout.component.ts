import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-sigle-layout',
  imports: [RouterOutlet, SidebarComponent,MatSidenavModule,MatToolbarModule, MatButtonModule, MatIconModule,MatBadgeModule],
  templateUrl: './sigle-layout.component.html',
  styleUrl: './sigle-layout.component.css'
})
export class SigleLayoutComponent {
  drawer: any;
}
