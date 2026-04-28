import { Routes } from '@angular/router';


export const Full_ROUTES: Routes = [
  {
    path: 'landing',
    loadChildren: () =>
      import('./../../landing/landing.module').then((m) => m.LandingModule),
    },
      {
    path: 'aradagame/:name',
    loadChildren: () =>
      import('./../../game/game.module').then((m) => m.GameModule),
    },
];
