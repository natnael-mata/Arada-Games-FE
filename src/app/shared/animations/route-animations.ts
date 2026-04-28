import { trigger, transition, style, query, group, animate } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  // Forward transitions (e.g., LandingPage -> HowItWorksPage, slide in from right)
  transition('LandingPage => HowItWorksPage, HowItWorksPage => AboutUsPage, AboutUsPage => FaqPage, FaqPage => GameListPage, GameListPage => LeaderBoardPage, LeaderBoardPage => ContactUsPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      })
    ], { optional: true }),
    query(':enter', [style({ left: '100%', opacity: 0 })], { optional: true }),
    group([
      query(':leave', [
        animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ left: '-100%', opacity: 0 }))
      ], { optional: true }),
      query(':enter', [
        animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ left: '0%', opacity: 1 }))
      ], { optional: true })
    ])
  ]),
  // Backward transitions (e.g., ContactUsPage -> LeaderBoardPage, slide in from left)
  transition('ContactUsPage => LeaderBoardPage, LeaderBoardPage => GameListPage, GameListPage => FaqPage, FaqPage => AboutUsPage, AboutUsPage => HowItWorksPage, HowItWorksPage => LandingPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      })
    ], { optional: true }),
    query(':enter', [style({ left: '-100%', opacity: 0 })], { optional: true }),
    group([
      query(':leave', [
        animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ left: '100%', opacity: 0 }))
      ], { optional: true }),
      query(':enter', [
        animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ left: '0%', opacity: 1 }))
      ], { optional: true })
    ])
  ]),
  // Catch-all for other transitions
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      })
    ], { optional: true }),
    query(':enter', [style({ left: '100%', opacity: 0 })], { optional: true }),
    group([
      query(':leave', [
        animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ left: '-100%', opacity: 0 }))
      ], { optional: true }),
      query(':enter', [
        animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ left: '0%', opacity: 1 }))
      ], { optional: true })
    ])
  ])
]);