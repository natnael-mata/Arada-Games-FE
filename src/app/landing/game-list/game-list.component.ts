import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Game } from '../../shared/models/game.model';
import { GamesApiService } from '../../shared/services/games-api.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html'
})
export class GameListComponent implements OnInit, AfterViewInit {
  @ViewChild('gameSlider') gameSlider!: ElementRef<HTMLDivElement>;

  readonly stars = [1, 2, 3, 4, 5];
  games: Game[] = [];
  loading = true;
  errorMessage: string | null = null;

  currentIndex = 0;
  visibleCards = 3; // Always max 3
  maxIndex = 0;
  private viewReady = false;

  constructor(private gamesApi: GamesApiService) {}

  ngOnInit(): void {
    this.gamesApi.getGames().subscribe({
      next: (games) => {
        this.games = games;
        this.loading = false;
        this.refreshSliderBounds();
      },
      error: () => {
        this.errorMessage = 'Unable to load games right now. Please try again shortly.';
        this.loading = false;
      },
    });
  }

  ngAfterViewInit(): void {
    this.viewReady = true;
    this.updateMaxIndex(); // only sets maxIndex, does NOT scroll
  }

  @HostListener('window:resize')
  updateMaxIndex() {
    if (!this.viewReady) {
      return;
    }

    // calculate max scroll index based on max 3 visible
    this.maxIndex = Math.max(0, this.games.length - this.visibleCards);
    this.currentIndex = Math.min(this.currentIndex, this.maxIndex);
    // ⚠️ removed code that auto-changed currentIndex
  }

  scrollLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.scrollToCurrent();
    }
  }

  scrollRight() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
      this.scrollToCurrent();
    }
  }

  private scrollToCurrent() {
    if (!this.gameSlider?.nativeElement?.children.length) {
      return;
    }

    const slider = this.gameSlider.nativeElement;
    const card = slider.children[this.currentIndex] as HTMLElement;
    card.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  }

  private refreshSliderBounds() {
    if (!this.viewReady) {
      return;
    }

    setTimeout(() => this.updateMaxIndex());
  }
}
