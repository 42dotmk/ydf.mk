#!/usr/bin/env bash
set -euo pipefail

ENV_FILE="${1:-.env}"

if [ -f "$ENV_FILE" ]; then
  printf '%s already exists. Overwrite? [y/N] ' "$ENV_FILE"
  read -r answer
  case "$answer" in
    [yY]*) ;;
    *) echo "Aborted."; exit 1 ;;
  esac
fi

cat > "$ENV_FILE" <<EOF
DATABASE_CLIENT=postgres
DATABASE_HOST=postgres
DATABASE_PORT=5432
DATABASE_NAME=strapi_blog
DATABASE_USERNAME=strapi
POSTGRES_PASSWORD=$(openssl rand -hex 32)
APP_KEYS=$(openssl rand -base64 16),$(openssl rand -base64 16),$(openssl rand -base64 16),$(openssl rand -base64 16)
API_TOKEN_SALT=$(openssl rand -base64 16)
ADMIN_JWT_SECRET=$(openssl rand -base64 16)
JWT_SECRET=$(openssl rand -base64 16)
TRANSFER_TOKEN_SALT=$(openssl rand -base64 16)
IMAGE_TAG=latest
EOF

echo "Generated $ENV_FILE"
