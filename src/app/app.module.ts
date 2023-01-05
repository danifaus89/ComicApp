//MODULES//
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
//PAGES//
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { AppComponent } from './app.component';
import { HeroCardComponent } from './shared/components/hero-card/hero-card.component';

@NgModule({
  declarations: [AppComponent, NopagefoundComponent, HeroCardComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
