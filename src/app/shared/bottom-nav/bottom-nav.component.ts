import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss'],
})
export class BottomNavComponent {
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
      id: 'settings',
      label: 'Settings',
      icon: 'assets/icons/setting.svg',
      route: '/settings',
    },
  ];

  constructor(private router: Router) {}

  onTabClick(item: any) {
    this.activeTab = item.id;
    this.router.navigate([item.route]);
  }
}
