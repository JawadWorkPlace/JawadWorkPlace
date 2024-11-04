import { Component } from '@angular/core';
import { isSideBar } from './isSideBar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  sidebarlist: isSideBar[] = [];
}
