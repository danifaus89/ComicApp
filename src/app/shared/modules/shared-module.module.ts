//MODULES//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { FormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';

//COMPONENTS//
import { BreadcrumbsComponent } from '../components/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HeroCardComponent } from '../components/hero-card/hero-card.component';
import { MenuCardComponent } from '../components/menu-card/menu-card.component';
import { TabMenuComponent } from '../components/tab-menu/tab-menu.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { TableComponent } from '../components/table/table.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    HeroCardComponent,
    MenuCardComponent,
    TabMenuComponent,
    CarouselComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    BrowserAnimationsModule,
    SidebarModule,
    MessageModule,
    TabMenuModule,
    TieredMenuModule,
    GalleriaModule,
    CarouselModule,
    TableModule,
    MultiSelectModule,
    DropdownModule,
    SliderModule,
    ProgressBarModule,
    FormsModule,
    ImageModule,
  ],
  exports: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    HeroCardComponent,
    MenuCardComponent,
    TabMenuComponent,
    CardModule,
    ButtonModule,
    CarouselComponent,
    TableComponent,
  ],
})
export class SharedModuleModule {}
