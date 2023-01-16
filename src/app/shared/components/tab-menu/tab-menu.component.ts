import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css'],
})
export class TabMenuComponent {
  public items: MenuItem[] = [];
  public activeItem: any;

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: '', routerLink: 'home' },
      { label: 'Heroes', icon: '', routerLink: 'heroes' },
      { label: 'Comics', icon: '', routerLink: 'comics' },
      { label: 'Creators', icon: '', routerLink: 'creators' },
      { label: 'Events', icon: '', routerLink: 'events' },
      { label: 'Series', icon: '', routerLink: 'series' },
    ];
    this.activeItem = this.items[0];
  }
}
