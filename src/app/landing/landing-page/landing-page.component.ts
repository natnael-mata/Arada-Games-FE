import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { ContactApiService } from '../../shared/services/contact-api.service';
import { ContactRequest } from '../../shared/models/contact-request.model';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta,
    private contactApi: ContactApiService,
    private authService: AuthService
  ) { }

  isTermsModalOpen = false;
  selectedDotIndex = 0; // active dot index

  // Subscribe modal state
  isSubscribeModalOpen = false;

  // FAQ Data
  faqs = [
    {
      question: 'How do I start playing Arada Games and log in?',
      answerTitle: 'Instructions:',
      answer: 'Send OK to 9000 via SMS. You’ll receive a welcome message with your game access link and login credentials.\nVisit Arada-Games.et.\nUse:\n● Username: Your phone number\n● Password: The one sent via SMS (you can change it after logging in)',
      open: false
    },
    {
      question: 'What kinds of games are available?',
      answerTitle: 'Details:',
      answer: 'The platform includes a mix of single-player and multiplayer games. Each game comes with:\n● Game rules\n● How-to-play instructions\n● Help section',
      open: false
    },
    {
      question: 'How can I check who is winning or leading?',
      answerTitle: 'Leaderboard:',
      answer: 'Go to the Leaderboard section to see top players, rankings, and high scores. Your nickname will appear there if you update your profile.',
      open: false
    },
    {
      question: 'Can I invite friends to Arada Games and earn coins?',
      answerTitle: 'Referral & Coins:',
      answer: 'Yes! Share your referral number or link. When someone joins using your referral, you earn free coins.\n1 coin = 1 day of access to Arada Games. Coins let you play all available games for the day.',
      open: false
    },
    {
      question: 'How much does the service cost?',
      answerTitle: 'Subscription:',
      answer: 'Arada Games is a subscription-based service. 2 Birr will be deducted daily from your airtime balance.',
      open: false
    },
    {
      question: 'Is there a free trial?',
      answerTitle: 'Trial:',
      answer: 'Yes. When you subscribe for the first time, you get a 3-day free trial. If you unsubscribe and then re-subscribe later, you will be charged immediately (no second trial).',
      open: false
    },
    {
      question: 'How do I unsubscribe?',
      answerTitle: 'Unsubscribe:',
      answer: 'Send STOP to 9000. You’ll receive a confirmation SMS and your subscription will be canceled.',
      open: false
    }
  ];

  // Contact Form Data
  formData: ContactRequest = {
    fullName: '',
    phoneNumber: '',
    message: '',
  };
  submitting = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  // Login Form Data
  credentials = {
    user_id: '',
    password: ''
  };
  loading = false;
  loginErrorMessage = '';

  // Games Catalog (Static display for landing page)
  gamesCatalog = [
    { name: 'Escape Demb', type: 'Action/Arcade', icon: '🏃', image: '/assets/images/escape_d_poster.jpg' },
    { name: 'Archers ET', type: 'Archery', icon: '🏹', image: '/assets/images/archers_poster.png' },
    { name: 'Star War', type: 'Strategy/Action', icon: '🚀', image: '/assets/images/My Planet.png' },
    { name: 'One Eye', type: 'Arcade', icon: '👁️', image: '/assets/images/One Eye.png' },
    { name: 'XO', type: 'Logic Puzzle', icon: '❌', image: '/assets/images/xo_poster.jpg' }
  ];

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
    this.loading = true;
    this.loginErrorMessage = '';

    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.ok) {
          this.router.navigate(['/landing/game-list']);
        }
      },
      error: (err) => {
        this.loading = false;
        this.loginErrorMessage = err.error?.message || 'Login failed. Please check your credentials and try again.';
      }
    });
  }

  ngOnInit(): void {
    // ✅ SEO Meta Tags
    this.titleService.setTitle('Arada Games – From Arada to Aradas | Locally Made Fun – Arada-Games.et');

    this.metaService.addTags([
      { name: 'description', content: 'Play Escape Demb & Kabo on Arada Games—Ethiopia’s local gaming hub. 100K+ players. Ethio Telecom VAS subscription. From Arada to Aradas!' },
      { name: 'keywords', content: 'Adara Games, Ethiopian gaming platform, locally developed games Ethiopia, mobile games Ethiopia, Arada Games, Ethiopian multiplayer games, subscription-based games Ethiopia, VAS games Ethio Telecom, Ethio Telecom games, play games on Ethio Telecom, Escape Demb game, endless runner Ethiopia, local endless runner game, multiplayer games Ethiopia, online games Ethiopia, 100k+ players games, best Ethiopian games, trending games in Ethiopia, Ethiopian game subscription, new mobile games Ethiopia, gaming with friends Ethiopia, local game developers Ethiopia' },
      { property: 'og:title', content: 'Arada Games – From Arada to Aradas | Locally Made Fun' },
      { property: 'og:description', content: 'Ethiopia’s #1 local gaming hub with Escape Demb & Kabo. 100K+ players. Ethio Telecom subscription available.' },
      { property: 'og:url', content: 'https://Arada-Games.et' },
      { property: 'og:type', content: 'website' }
    ]);

  }

  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

  submitContact(form: NgForm) {
    if (form.invalid || this.submitting) {
      return;
    }

    this.submitting = true;
    this.successMessage = null;
    this.errorMessage = null;

    this.contactApi.submit(this.formData).subscribe({
      next: (response) => {
        this.successMessage = response.message;
        this.submitting = false;
        this.formData = {
          fullName: '',
          phoneNumber: '',
          message: '',
        };
        form.resetForm(this.formData);
      },
      error: (error) => {
        this.errorMessage =
          error?.error?.message || 'We could not send your message right now. Please try again.';
        this.submitting = false;
      },
    });
  }
}
