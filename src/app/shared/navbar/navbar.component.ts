import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  selectedLang = 'en';

  constructor(private router: Router, private authService: AuthService) { }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  onLanguageChange(event: Event) {
    const lang = (event.target as HTMLSelectElement).value;
    console.log('Language switched to:', lang);
    // TODO: hook into translation service here
  }

  logout() {
    this.authService.logout();
    this.selectedLang = 'en';
    this.router.navigate(['/']);
  }
}

