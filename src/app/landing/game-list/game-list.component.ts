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
import { ContactApiService } from '../../shared/services/contact-api.service';
import { NgForm } from '@angular/forms';

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

  formData = {
    fullName: '',
    phoneNumber: '',
    message: '',
  };
  submitting = false;
  successMessage: string | null = null;
  contactErrorMessage: string | null = null;

  constructor(
    private gamesApi: GamesApiService,
    private contactApi: ContactApiService
  ) {}

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

  submitContact(form: NgForm) {
    if (form.invalid || this.submitting) {
      return;
    }

    this.submitting = true;
    this.successMessage = null;
    this.contactErrorMessage = null;

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
        this.contactErrorMessage =
          error?.error?.message || 'We could not send your message right now. Please try again.';
        this.submitting = false;
      },
    });
  }
}
