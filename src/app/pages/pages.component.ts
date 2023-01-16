import { Component, OnInit } from '@angular/core';
import { PagesService } from './pages.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  //styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  public images: any;
  public imageOptions: any[];
  public responsiveOptions: any;

  constructor(public pagesService: PagesService) {}

  ngOnInit() {
    this.carouselConfig();
    this.initCarousel();
  }

  carouselConfig() {
    this.responsiveOptions = [
      {
        breakpoint: '768px',
        numVisible: 0,
        numScroll: 0,
      },
    ];
  }

  initCarousel() {
    this.pagesService.getCarouselImages().subscribe((data) => {
      if (data) {
        this.images = data;
      }
    });
  }
}
