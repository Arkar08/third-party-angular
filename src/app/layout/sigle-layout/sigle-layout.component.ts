import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-sigle-layout',
  imports: [RouterOutlet, NavbarComponent, SidebarComponent,MatSidenavModule],
  templateUrl: './sigle-layout.component.html',
  styleUrl: './sigle-layout.component.css'
})
export class SigleLayoutComponent {

}
