import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { GameListComponent } from './game-list/game-list.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthGuard } from '../shared/guard/auth.guard'; // Import AuthGuard

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: { animation: 'LandingPage' }
  },
  {
    path: 'how-it-work',
    component: HowItWorksComponent,
    data: { animation: 'HowItWorksPage' }
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    data: { animation: 'AboutUsPage' }
  },
  {
    path: 'faq',
    component: FaqComponent,
    data: { animation: 'FaqPage' }
  },
  {
    path: 'game-list',
    component: GameListComponent,
    canActivate: [AuthGuard], // Protect route
    data: { animation: 'GameListPage' }
  },
  {
    path: 'leaderboard',
    component: LeaderBoardComponent,
    data: { animation: 'LeaderBoardPage' }
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    data: { animation: 'ContactUsPage' }
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