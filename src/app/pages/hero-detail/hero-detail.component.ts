import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../heroes/service/heroes.service';
import { HeroTableInfo } from 'src/app/shared/models/hero.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  public id: number;
  public detail: HeroTableInfo[];
  public dataResults: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.loadDetail();
  }

  loadDetail() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.heroeService.getHeroe(this.id).subscribe((data) => {
      if (data) {
        this.dataResults = data;
        this.detail = this.dataResults.data.results;
        this.detail.forEach((x: any) => {
          x.id = x.id;
          x.name = x.name;
          x.description = x.description;
          x.comics = x.comics.available;
          x.events = x.events.available;
          x.series = x.series.available;
          x.stories = x.stories.available;
          x.urls = x.urls.url;
          x.thumbnail = x.thumbnail.path + '.' + x.thumbnail.extension;
        });
        console.log(this.detail);
      }
    });
  }

  goBack() {
    this._location.back();
  }
}
