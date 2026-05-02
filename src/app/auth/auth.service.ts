import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.appApiUrl || '/api';

  constructor(private http: HttpClient, private router: Router) { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        if (response && response.ok && response.token) {
          localStorage.setItem('user', JSON.stringify(response.user));
          localStorage.setItem('access_token', response.token); 
        }
      })
    );
  }

  logout() {
    this.http.post(`${this.apiUrl}/logout`, {}).subscribe({
      next: () => console.log('Backend logout success'),
      error: (err) => console.error('Backend logout error', err)
    });
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    this.router.navigate(['/landing']);
  }

  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  getProfile(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profile`);
  }

  tokenGetter() {
    return localStorage.getItem('access_token');
  }
}
