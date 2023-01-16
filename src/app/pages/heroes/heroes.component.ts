import { Component, OnInit } from '@angular/core';
import { HeroesService } from './service/heroes.service';
import { HeroTableInfo } from 'src/app/shared/models/hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  public heroes: HeroTableInfo[];
  public img: string;
  private limit: number;

  constructor(private heroeService: HeroesService) {}

  ngOnInit(): void {
    this.initTable();
  }

  initTable() {
    this.limit = 100;
    this.heroeService.getHeroes(this.limit).subscribe((data) => {
      if (data) {
        this.heroes = data.data.results;
        this.heroes.forEach((x: any) => {
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
        console.log(this.heroes);
      }
    });
  }
}
