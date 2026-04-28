import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  onLogin(): void {
    // Add real login logic here (validation, authentication, etc.)
    localStorage.setItem('access_token', 'mock_token'); // Simulate login
    this.router.navigate(['/landing/game-list']);
  }
}
