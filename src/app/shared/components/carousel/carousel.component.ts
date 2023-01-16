import { Component, Input } from '@angular/core';
import { CarouselService } from './carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @Input() elements: any[];
  @Input() responsiveOptions: any;
  @Input() interval: number;

  constructor() {}

  ngOnInit() {}
}
