//MODULES///
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleModule } from '../shared/modules/shared-module.module';
import { AppRoutingModule } from '../app-routing.module';

//COMPONENTS//
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [DashboardComponent, PagesComponent, HeroesComponent],
  imports: [CommonModule, SharedModuleModule, AppRoutingModule],
  exports: [DashboardComponent, PagesComponent],
})
export class PagesModule {}
