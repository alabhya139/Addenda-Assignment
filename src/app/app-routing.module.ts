import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TweetGuardService } from './services/tweet-guard.service';
import { LoginGuardService } from './services/login-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'tweets',
    loadChildren: () => import('./tweet-page/tweet-page.module').then(module => module.TweetPageModule),
    canActivate: [TweetGuardService]
  },
  {
    path: '*',
    redirectTo: '/tweets',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/tweets',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuardService, TweetGuardService]
})
export class AppRoutingModule { }
