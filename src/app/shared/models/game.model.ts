export interface GameLaunch {
  type: 'asset' | 'external';
  url: string;
  requiresHealthCheck: boolean;
}

export interface Game {
  slug: string;
  name: string;
  image: string;
  route: string;
  modeLabel: string;
  playerCountLabel: string;
  rating: number;
  launch: GameLaunch;
}

export interface GameHealthStatus {
  ok: boolean;
  game: string;
  launchUrl: string;
  details?: string;
}
