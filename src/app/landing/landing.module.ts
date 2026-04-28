import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { WhyBudgetWiseComponent } from './why-budget-wise/why-budget-wise.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GameListComponent } from './game-list/game-list.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    NavbarComponent,
    HowItWorksComponent,
    WhyBudgetWiseComponent,
    TestimonialsComponent,
    FaqComponent,
    ContactUsComponent,
    FooterComponent,
    AboutUsComponent,
    GameListComponent,
    LeaderBoardComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
