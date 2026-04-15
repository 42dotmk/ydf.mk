# ydf.mk

Monorepo for the **Youth of Diverse Families** (Млади од семејна разновидност) website — a Next.js static frontend backed by a Strapi 5 CMS.

## Project structure

```
├── frontend/          # Next.js 16 static site (pnpm)
├── cms/               # Strapi 5 headless CMS (npm)
├── compose.yml        # Production Docker Compose stack
├── .env.example       # Template for required environment variables
├── generate-env.sh    # Generate a .env with random secrets
└── .github/workflows/ # CI — build & publish Docker images to GHCR
```

## Prerequisites

| Tool | Version |
|------|---------|
| Docker & Docker Compose | 24+ / v2 |
| Node.js (local dev only) | ≥ 20 |
| pnpm (frontend) | latest |
| npm (cms) | bundled with Node |

## Local development

### Frontend

```bash
cd frontend
pnpm install
pnpm dev          # http://localhost:3000
```

### CMS

```bash
cd cms
npm install
npm run develop   # http://localhost:1337/admin
```

By default the CMS uses SQLite for local development — no database setup required.

## Production deployment (Docker Compose)

### 1. Generate secrets

The quickest way is to run the included helper script:

```bash
./generate-env.sh        # creates .env with random secrets
./generate-env.sh .env.prod   # or write to a custom path
```

Alternatively, copy the template and fill in values manually:

```bash
cp .env.example .env
# then replace every "changeme" — generate values with:
openssl rand -base64 32   # for POSTGRES_PASSWORD
openssl rand -base64 16   # for each salt/secret
```

`APP_KEYS` expects four comma-separated base64 values.

### 2. Pull and start

```bash
# Use the latest images from GHCR
docker compose pull
docker compose up -d
```

| Service | URL |
|---------|-----|
| Frontend | http://localhost |
| CMS Admin | http://localhost:1337/admin |
| Postgres | internal (port 5432, not exposed) |

### 3. Pin a specific version

Set `IMAGE_TAG` in your `.env` to a Git tag or short SHA produced by CI:

```env
IMAGE_TAG=v1.2.0
# or
IMAGE_TAG=sha-abc1234
```

Then re-run `docker compose pull && docker compose up -d`.

## Docker images

Images are built and published to the GitHub Container Registry by the CI pipeline on every push to `main` and on version tags (`v*`).

| Image | Path |
|-------|------|
| Frontend | `ghcr.io/42dotmk/ydf.mk/frontend` |
| CMS | `ghcr.io/42dotmk/ydf.mk/cms` |

Both Dockerfiles use multi-stage builds to keep the final images small:

- **Frontend** — deps → build → nginx (serves the static export)
- **CMS** — deps → build → node:22-alpine (runs Strapi)

## Environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| `DATABASE_CLIENT` | `postgres` | Database driver (`postgres` or `sqlite`) |
| `DATABASE_HOST` | `postgres` | Database hostname (the Compose service name) |
| `DATABASE_PORT` | `5432` | Database port |
| `DATABASE_NAME` | `strapi_blog` | Database name |
| `DATABASE_USERNAME` | `strapi` | Database user |
| `POSTGRES_PASSWORD` | — | Postgres password (required, shared with CMS) |
| `APP_KEYS` | — | Strapi app keys (four comma-separated base64 values) |
| `API_TOKEN_SALT` | — | Salt for API tokens |
| `ADMIN_JWT_SECRET` | — | Secret for admin JWT |
| `JWT_SECRET` | — | Secret for public JWT |
| `TRANSFER_TOKEN_SALT` | — | Salt for transfer tokens |
| `IMAGE_TAG` | `latest` | Docker image tag (`latest`, `main`, `v1.0.0`, `sha-…`) |

## CI / CD

The GitHub Actions workflow (`.github/workflows/docker.yml`) runs two parallel jobs:

1. **build-cms** — builds and pushes `ghcr.io/42dotmk/ydf.mk/cms`
2. **build-frontend** — builds and pushes `ghcr.io/42dotmk/ydf.mk/frontend`

Images are tagged with the branch name, semver (on tags), and the short commit SHA. BuildKit layer caching via GitHub Actions cache keeps rebuilds fast.
