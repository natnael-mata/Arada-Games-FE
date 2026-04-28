import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Game, GameHealthStatus } from '../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GamesApiService {
  private readonly apiUrl = environment.appApiUrl;

  constructor(private http: HttpClient) {}

  getGames() {
    return this.http.get<Game[]>(`${this.apiUrl}/games`);
  }

  getGame(slug: string) {
    return this.http.get<Game>(`${this.apiUrl}/games/${slug}`);
  }

  checkGameHealth(slug: string) {
    return this.http.get<GameHealthStatus>(`${this.apiUrl}/games/${slug}/health`);
  }
}
