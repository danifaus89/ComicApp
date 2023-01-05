//MODULES//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

//COMPONENTS//
import { BreadcrumbsComponent } from '../components/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@NgModule({
  declarations: [BreadcrumbsComponent, SidebarComponent, HeaderComponent],
  imports: [CommonModule, CardModule, ButtonModule],
  exports: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    CardModule,
    ButtonModule,
  ],
})
export class SharedModuleModule {}
