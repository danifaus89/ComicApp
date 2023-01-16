//MODULES///
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModuleModule } from '../shared/modules/shared-module.module';
import { AppRoutingModule } from '../app-routing.module';

//COMPONENTS//
import { PagesComponent } from './pages.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ComicsComponent } from './comics/comics.component';
import { CreatorsComponent } from './creators/creators.component';
import { EventsComponent } from './events/events.component';
import { SeriesComponent } from './series/series.component';
import { StoriesComponent } from './stories/stories.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

//SERVICES//
import { PagesService } from './pages.service';

@NgModule({
  declarations: [
    PagesComponent,
    HeroesComponent,
    ComicsComponent,
    CreatorsComponent,
    EventsComponent,
    SeriesComponent,
    StoriesComponent,
    HeroDetailComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModuleModule,
    AppRoutingModule,
  ],
  exports: [PagesComponent, HeroesComponent],
  providers: [PagesService],
})
export class PagesModule {}
