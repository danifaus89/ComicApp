//MODULES//
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from './shared/modules/shared-module.module';
import { PagesRoutingModule } from './pages/pages-routing.module';

//COMPONENTS//
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SharedModuleModule,
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule, SharedModuleModule],
})
export class AppRoutingModule {}
