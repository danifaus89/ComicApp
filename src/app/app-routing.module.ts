//MODULES//
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from './shared/modules/shared-module.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
//COMPONENTS//
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

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
