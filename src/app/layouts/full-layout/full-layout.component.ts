import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { RouterOutlet, Router } from '@angular/router';
import { slideInAnimation } from '../../shared/animations/route-animations';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
  animations: [slideInAnimation]
})
export class FullLayoutComponent implements OnInit, OnDestroy {
    private destroy$ = new Subject<void>();
  isMobile = false;
  isAuthenticated = false; // <-- Replace with real auth service later

  private touchStartX = 0;
  private touchStartY = 0;
  private touchStartTime = 0;

  private readonly swipeThreshold = 50;     // Minimum horizontal distance (px)
  private readonly swipeTimeLimit = 500;    // Max duration (ms)
  private readonly verticalTolerance = 75;  // Ignore if swipe is too vertical

  // Base route order (without profile)
  private baseRouteOrder = [
    { path: '', animation: 'LandingPage' },
    { path: 'how-it-work', animation: 'HowItWorksPage' },
    { path: 'game-list', animation: 'GameListPage' },
    { path: 'about-us', animation: 'AboutUsPage' },
    { path: 'faq', animation: 'FaqPage' },
    { path: 'contact-us', animation: 'ContactUsPage' }
  ];

  // Final route order (built dynamically depending on auth state)
  private routeOrder: { path: string; animation: string }[] = [];

  constructor(public router: Router) {}

  ngOnInit() {
    this.checkScreenSize();
    this.buildRouteOrder();
    console.log('Initial isMobile:', this.isMobile);
    console.log('Route order:', this.routeOrder.map(r => r.path));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private buildRouteOrder() {
    this.routeOrder = [...this.baseRouteOrder];
this.isAuthenticated=true
    // Insert Profile page before Contact Us if authenticated
    if (this.isAuthenticated) {
      const contactIndex = this.routeOrder.findIndex(r => r.path === 'contact-us');
      if (contactIndex !== -1) {
        this.routeOrder.splice(contactIndex, 0, {
          path: 'profile',
          animation: 'ProfilePage'
        });
      }
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    if (!this.isMobile) return;

    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
    this.touchStartTime = new Date().getTime();
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    if (!this.isMobile) return;

    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;
    const touchEndTime = new Date().getTime();

    const deltaX = touchEndX - this.touchStartX;
    const deltaY = touchEndY - this.touchStartY;
    const duration = touchEndTime - this.touchStartTime;

    if (
      Math.abs(deltaX) > this.swipeThreshold &&
      Math.abs(deltaY) < this.verticalTolerance &&
      duration < this.swipeTimeLimit
    ) {
      if (deltaX < 0) {
        this.navigateNext(); // Swipe left
      } else {
        this.navigatePrevious(); // Swipe right
      }
    } else {
      console.log('Not a valid swipe');
    }
  }

  private navigateNext() {
    const { nextIndex } = this.getRouteIndices();
    const targetPath = this.routeOrder[nextIndex].path;
    console.log('Swipe Left → Navigating to /landing/' + targetPath);

    this.router.navigate(
      targetPath ? ['/landing', targetPath] : ['/landing']
    );
  }

  private navigatePrevious() {
    const { prevIndex } = this.getRouteIndices();
    const targetPath = this.routeOrder[prevIndex].path;
    console.log('Swipe Right → Navigating to /landing/' + targetPath);

    this.router.navigate(
      targetPath ? ['/landing', targetPath] : ['/landing']
    );
  }

  private getRouteIndices() {
    let currentUrl = this.router.url
      .replace(/^\/+landing\//, '')
      .replace(/^\/+landing$/, '') // handle /landing without trailing slash
      .replace(/^\/+/, '')
      .replace(/\/+$/, ''); // remove trailing slash

    const currentIndex = this.routeOrder.findIndex(route => route.path === currentUrl);

    return {
      currentIndex,
      nextIndex: (currentIndex + 1) % this.routeOrder.length,
      prevIndex: currentIndex === 0 ? this.routeOrder.length - 1 : currentIndex - 1
    };
  }

  private checkScreenSize() {
    this.isMobile =
      window.innerWidth < 768 ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0;
    console.log('isMobile updated:', this.isMobile);
  }

  prepareRoute(outlet: RouterOutlet) {
    const animation = outlet?.activatedRouteData?.['animation'];
    console.log('Route Animation Data:', animation);
    return animation;
  }
}
