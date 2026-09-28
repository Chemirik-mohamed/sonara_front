# Sonara — Front

Web interface for **Sonara**, a text-to-speech application: the user enters some text, the backend generates an audio file, which can be played directly in the browser or downloaded.

## Tech stack

- **React 19** + **TypeScript** — user interface
- **Vite** — dev server and build
- **React Router** — page navigation
- **Tailwind CSS 4** + **DaisyUI** — styling and components
- **Axios** — HTTP requests to the API
- **Better Auth** — authentication (client)
- **Zod** — client-side data validation
- **Biome** — linter and formatter
- **Bun** — package manager

## Prerequisites

- [Bun](https://bun.sh) installed
- The **Sonara backend** running and reachable (it provides the generation API and authentication)

## Installation

```bash
git clone <repository-url>
cd sonara_front
bun install
cp .env.example .env
```

Then fill in the variables in `.env` (see below).

## Environment variables

| Variable       | Description                   | Example                 |
| -------------- | ----------------------------- | ----------------------- |
| `VITE_API_URL` | Root URL of the Sonara backend | `http://localhost:3000` |

- **No `/api` at the end**: the `/api` prefix is added by the Axios client, and Better Auth uses the root URL.
- **No trailing slash.**
- Variables prefixed with `VITE_` are embedded in the bundle and therefore **publicly visible**: never put secrets in them.

## Scripts

| Command           | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| `bun run dev`     | Starts the development server                               |
| `bun run build`   | Type-checks (`tsc`) then builds the app into `dist/`        |
| `bun run preview` | Serves the production build locally                         |

Linting and formatting with Biome:

```bash
bunx biome check .          # checks the code
bunx biome check --write .  # applies automatic fixes
```

## Routes

| Route       | Page                                  |
| ----------- | ------------------------------------- |
| `/signup`   | Sign up                               |
| `/generate` | Text input and audio generation       |

## Project structure

```
src/
├── api/       # Functions calling the backend endpoints
├── lib/       # Configured clients (Axios, Better Auth)
├── pages/     # Page components, one per route
├── routes/    # Application route definitions
├── schema/    # Zod validation schemas
├── App.tsx
└── main.tsx   # Entry point
```
