import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css'],
})
export class MenuCardComponent {
  @Input() appMenu: any;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.appMenu);
  }

  goToPage(path: string) {
    this.router.navigate([path]);
  }
}
