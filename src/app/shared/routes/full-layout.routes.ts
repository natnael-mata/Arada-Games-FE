import { Routes } from '@angular/router';
import { AuthGuard } from './../guard/auth.guard';

export const Full_ROUTES: Routes = [
  {
    path: 'landing',
    loadChildren: () =>
      import('./../../landing/landing.module').then((m) => m.LandingModule),
    },
  {
    path: 'aradagame/:name',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./../../game/game.module').then((m) => m.GameModule),
    },
];
