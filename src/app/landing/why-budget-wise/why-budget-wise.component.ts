import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-budget-wise',
  templateUrl: './why-budget-wise.component.html',
  styleUrls: ['./why-budget-wise.component.scss']
})
export class WhyBudgetWiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  features = [
    {
      image: 'assets/images/card1.svg',
      title: 'Made for Ethiopian Life',
      description: ' We understand Equb, Idir, and daily spending  we speak your financial language.',
    },
    {
      image: 'assets/images/card2.svg',
      title: 'Multi-Language Support',
      description: 'Available in in Amharic, Afaan Oromo, Tigrinya, or English, switch anytime for a smoother, local experience.',
    },
    {
      image: 'assets/images/card3.svg',
      title: 'Smart Reminders',
      description: 'Never miss a rent, bill, or Equb payment again.',
    },
    {
      image: 'assets/images/card4.svg',
      title: ' Goal-Based Saving',
      description: ' Whether it’s for school fees, home improvements, or an emergency fund we help you get there.',
    },
    {
      image: 'assets/images/card5.svg',
      title: 'No Banking App Required',
      description: ' Track both cash and mobile money with ease.',
    },
    {
      image: 'assets/images/card1.svg',
      title: 'Data Protection',
      description: 'Access your account with just your phone number and PIN. All your data stays private and encrypted.',
    },
  ];

}
