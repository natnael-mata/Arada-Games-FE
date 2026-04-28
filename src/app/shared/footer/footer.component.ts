import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  selectedDotIndex = 0;
  isAuthenticated = false; // <-- Replace with real AuthService later

  // Base route order (without profile)
  private baseRouteOrder = [
    { path: '', animation: 'LandingPage' },
    { path: 'how-it-work', animation: 'HowItWorksPage' },
    { path: 'game-list', animation: 'GameListPage' },
    { path: 'about-us', animation: 'AboutUsPage' },
    { path: 'faq', animation: 'FaqPage' },
    { path: 'contact-us', animation: 'ContactUsPage' }
  ];

  // Final route order depending on auth
  routeOrder: { path: string; animation: string }[] = [];

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.buildRouteOrder();

    // Detect route changes and update active dot
    this.router.events
      .pipe(takeUntil(this.destroy$))
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.updateSelectedDot(event.urlAfterRedirects);
        }
      });

    // Set initial state
    this.updateSelectedDot(this.router.url);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private buildRouteOrder() {
    this.routeOrder = [...this.baseRouteOrder];
    this.isAuthenticated=true
    // Insert Profile before Contact Us if authenticated
    if (this.isAuthenticated) {
      const contactIndex = this.routeOrder.findIndex(r => r.path === 'contact-us');
      if (contactIndex !== -1) {
        this.routeOrder.splice(contactIndex, 0, {
          path: 'profile',
          animation: 'ProfilePage'
        });
      }
    }

    console.log('Footer route order:', this.routeOrder.map(r => r.path));
  }

  selectDot(index: number) {
    this.selectedDotIndex = index;
    const targetPath = this.routeOrder[index].path;
    this.router.navigate(
      targetPath ? ['/landing', targetPath] : ['/landing']
    );
  }

  private updateSelectedDot(currentUrl: string) {
    const cleanUrl = currentUrl
      .replace(/^\/+landing\//, '')
      .replace(/^\/+landing$/, '') // handle /landing
      .replace(/^\/+/, '')
      .replace(/\/+$/, ''); // trailing slash

    const index = this.routeOrder.findIndex(route => route.path === cleanUrl);
    this.selectedDotIndex = index >= 0 ? index : 0;
  }
}
