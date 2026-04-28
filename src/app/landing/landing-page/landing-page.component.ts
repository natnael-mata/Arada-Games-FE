import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) { }

  isTermsModalOpen = false;
  selectedDotIndex = 0; // active dot index

  // Subscribe modal state
  isSubscribeModalOpen = false;

  openTermsModal() {
    this.isTermsModalOpen = true;
  }

  closeTermsModal() {
    this.isTermsModalOpen = false;
  }

  selectDot(index: number) {
    this.selectedDotIndex = index;
  }

  // Open Subscribe Modal
  openSubscribeModal() {
    this.isSubscribeModalOpen = true;
  }

  // Close Subscribe Modal
  closeSubscribeModal() {
    this.isSubscribeModalOpen = false;
  }

  onLogin() {
    localStorage.setItem('access_token', 'mock_token');
    this.router.navigate(['/landing/game-list']);
  }

  ngOnInit(): void {
    // ✅ SEO Meta Tags
    this.titleService.setTitle('Arada Games – From Arada to Aradas | Locally Made Fun – Arada-Games.et');

    this.metaService.addTags([
      { name: 'description', content: 'Play Escape Dubm & Kabo on Arada Games—Ethiopia’s local gaming hub. 100K+ players. Ethio Telecom VAS subscription. From Arada to Aradas!' },
      { name: 'keywords', content: 'Adara Games, Ethiopian gaming platform, locally developed games Ethiopia, mobile games Ethiopia, Arada Games, Ethiopian multiplayer games, subscription-based games Ethiopia, VAS games Ethio Telecom, Ethio Telecom games, play games on Ethio Telecom, Escape Dubm game, endless runner Ethiopia, local endless runner game, multiplayer games Ethiopia, online games Ethiopia, 100k+ players games, best Ethiopian games, trending games in Ethiopia, Ethiopian game subscription, new mobile games Ethiopia, gaming with friends Ethiopia, local game developers Ethiopia' },
      { property: 'og:title', content: 'Arada Games – From Arada to Aradas | Locally Made Fun' },
      { property: 'og:description', content: 'Ethiopia’s #1 local gaming hub with Escape Dubm & Kabo. 100K+ players. Ethio Telecom subscription available.' },
      { property: 'og:url', content: 'https://Arada-Games.et' },
      { property: 'og:type', content: 'website' }
    ]);

  }
}
