# Copyright (c) 2025 CI-Agnostic Pipeline
# SPDX-License-Identifier: MIT

FROM node:24

WORKDIR /app

# npm ci requires package.json and package-lock.json to be in sync.
# Regenerate the lockfile (npm install --package-lock-only) before building.
COPY package*.json ./
RUN test -f package-lock.json && npm ci || (echo "package-lock.json missing or out of sync" && exit 1)

COPY . .

CMD ["npm", "test"]
