import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GameListComponent } from './game-list/game-list.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthGuard } from '../shared/guard/auth.guard'; // Import AuthGuard

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: { animation: 'LandingPage' }
  },
  {
    path: 'game-list',
    component: GameListComponent,
    canActivate: [AuthGuard], // Protect route
    data: { animation: 'GameListPage' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard], // Protect route
    data: { animation: 'ProfilePage' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }