FROM node:alpine

WORKDIR /usr/src/app

RUN npm i -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY src ./src

RUN apk add --no-cache busybox-extras

CMD ["pnpm", "play"]