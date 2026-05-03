import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  leaderboard: any[] = [];
  gameFilter: string = 'all';
  dateFilter: string = 'all';
  loading: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchLeaderboard();
  }

  fetchLeaderboard() {
    this.loading = true;
    let url = `${environment.appApiUrl}/scores/leaderboard`;
    const params = [];
    if (this.gameFilter && this.gameFilter !== 'all') params.push(`game=${this.gameFilter}`);
    if (this.dateFilter && this.dateFilter !== 'all') params.push(`date=${this.dateFilter}`);
    if (params.length > 0) url += '?' + params.join('&');

    this.http.get<any[]>(url).subscribe({
      next: (data) => {
        this.leaderboard = data || [];
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching leaderboard', err);
        this.loading = false;
        this.leaderboard = [];
      }
    });
  }

  onFilterChange() {
    this.fetchLeaderboard();
  }
}
