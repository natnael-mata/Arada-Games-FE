import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../shared/models/game.model';
import { GamesApiService } from '../../shared/services/games-api.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  gameUrl: SafeResourceUrl | null = null;
  gameName: string = '';
  loading = false;
  serverError: string | null = null;

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private gamesApi: GamesApiService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const gameSlug = params.get('name') || '';
      this.loadGame(gameSlug);
    });
  }

  private loadGame(gameSlug: string) {
    this.serverError = null;
    this.loading = true;
    this.gameUrl = null;

    this.gamesApi.getGame(gameSlug).subscribe({
      next: (game) => {
        this.gameName = game.name;
        this.resolveGameLaunch(game);
      },
      error: () => {
        this.serverError = 'Game details could not be loaded right now.';
        this.loading = false;
      },
    });
  }

  private resolveGameLaunch(game: Game) {
    if (!game.launch.requiresHealthCheck) {
      this.gameUrl = this.sanitizeUrl(game.launch.url);
      this.loading = false;
      return;
    }

    this.gamesApi.checkGameHealth(game.slug).subscribe({
      next: (status) => {
        this.gameUrl = this.sanitizeUrl(status.launchUrl);
        this.loading = false;
      },
      error: (error) => {
        this.serverError =
          error?.error?.details ||
          'The multiplayer server is unavailable. Start it with `npm start` or `npm run start:archers`.';
        this.loading = false;
      },
    });
  }

  private sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
