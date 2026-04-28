import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  activeTab = 'records';

  navItems = [
    {
      id: 'records',
      label: 'Records',
      icon: 'assets/icons/records.svg',
      route: '/dashboard',
    },
    {
      id: 'analysis',
      label: 'Analysis',
      icon: 'assets/icons/analysis.svg',
      route: '/analysis',
    },
    {
      id: 'plans',
      label: 'Plans',
      icon: 'assets/icons/plans.svg',
      route: '/plan',
    },
    {
      id: 'accounts',
      label: 'Accounts',
      icon: 'assets/icons/accounts.svg',
      route: '/accounts',
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: 'assets/icons/notification.svg',
      route: '/notification/home',
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'assets/icons/setting.svg',
      route: '/settings',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Set active tab based on current route
    this.setActiveTabFromRoute();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onNavClick(item: any) {
    this.activeTab = item.id;
    this.router.navigate([item.route]);
  }

  private setActiveTabFromRoute() {
    const currentRoute = this.router.url;
    const activeItem = this.navItems.find((item) =>
      currentRoute.includes(item.route)
    );
    if (activeItem) {
      this.activeTab = activeItem.id;
    }
  }
}
