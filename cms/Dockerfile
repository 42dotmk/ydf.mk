FROM node:24-alpine AS builder

WORKDIR /app

COPY . .

RUN apk add --no-cache python3 make g++

RUN npm install

RUN npm run build

ENV NODE_ENV=production

CMD npm start
