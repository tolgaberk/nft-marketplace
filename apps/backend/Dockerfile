FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY *.lock ./
COPY .env ./.env

RUN yarn install --frozen-lockfile

COPY dist ./dist

COPY prisma ./prisma

RUN yarn prisma generate

CMD ["node","./dist/apps/backend/main.js"]