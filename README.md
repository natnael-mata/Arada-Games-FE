# Arada Games — Frontend

Angular single-page app for the Arada Games platform: landing page, login
(single-device sessions), game catalogue, and in-browser HTML5 game play with
score submission. Talks to
[Arada-Games-BE](https://github.com/natnael-mata/Arada-Games-BE), which also
serves this app's production build from the same origin — so all API calls are
relative and need no CORS or base-URL configuration.

**Stack:** Angular, Tailwind CSS.

## Layout

| Path | What it is |
|---|---|
| `src/app/landing` | Public landing page |
| `src/app/auth` | Login flow and token/session handling |
| `src/app/game` | Game catalogue and play screens |
| `src/app/layouts`, `src/app/shared` | Shell, shared UI components |

## Develop

```bash
npm install
npm start        # dev server with /api proxied to the backend (proxy.conf.json)
```

## Build for production

```bash
npm run build    # outputs to dist/app
```

Deploy by pointing the backend's `PUBLIC_DIR` at `dist/app` (or copying the
build into its `public/` folder).
