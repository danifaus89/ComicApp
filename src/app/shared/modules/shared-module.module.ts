//MODULES//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//COMPONENTS//
import { BreadcrumbsComponent } from '../components/breadcrumbs/breadcrumbs.component';
import { GraficaComponent } from '../components/grafica/grafica.component';
import { HeaderComponent } from '../components/header/header.component';
import { ProgressComponent } from '../components/progress/progress.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    ProgressComponent,
    GraficaComponent,
  ],
  imports: [CommonModule],
  exports: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    ProgressComponent,
    GraficaComponent,
  ],
})
export class SharedModuleModule {}
