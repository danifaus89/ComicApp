import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  constructor(private httpService: HttpClient) {}

  getCardMenu() {
    return this.httpService.get('assets/json/menu-card.json');
  }

  getCarouselImages() {
    return this.httpService.get('assets/json/carousel.json');
  }
}
