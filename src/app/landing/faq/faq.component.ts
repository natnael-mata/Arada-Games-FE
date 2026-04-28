import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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

  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

}
