#!/usr/bin/env bash
set -euo pipefail

TAG="${1:-latest}"
REPO="ghcr.io/42dotmk/ydf.mk"

echo "==> Building cms image (${REPO}/cms:${TAG})"
docker build -t "${REPO}/cms:${TAG}" ./cms

echo "==> Building frontend image (${REPO}/frontend:${TAG})"
docker build -t "${REPO}/frontend:${TAG}" ./frontend

echo "Done. Run with: IMAGE_TAG=${TAG} docker compose up -d"
