import { Component, Input, ViewChild } from '@angular/core';
import { HeroTableInfo } from '../../models/hero.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() elements: HeroTableInfo[];
  loading: boolean = false;
  representatives: any[];
  activityValues: number[] = [0, 100];
  value: any;
  statuses: any[];

  constructor(private route: Router) {}

  ngOnInit() {
    //console.log(this.heroes);
  }

  public goToDetail(id: number): void {
    this.route.navigate(['/hero-detail/' + id]);
  }
}
