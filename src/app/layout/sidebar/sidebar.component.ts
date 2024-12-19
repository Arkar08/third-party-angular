import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { menuItem } from '../../utils/constant';


@Component({
  selector: 'app-sidebar',
  imports: [MatIconModule,RouterLink,RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  menuLists:any[]=[]
  constructor(){}
  ngOnInit(): void {
      this.menuLists = menuItem
  }
}
