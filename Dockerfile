FROM node:current-alpine3.14 AS base
WORKDIR /base
COPY package*.json ./
RUN npm ci
COPY . .

FROM base AS build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN npm run build

FROM node:current-alpine3.14 AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/next.config.js ./
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
RUN npm install next


FROM node:8.1.2-alpine
RUN apk add --no-cache make gcc g++ python
RUN rm -rf /usr/src/pixi/web/uploads
RUN mkdir -p /usr/src/pixi/web
WORKDIR /usr/src/pixi/web
COPY package.json /usr/src/pixi/web
COPY package-lock.json /usr/src/pixi/web

RUN npm install --save
RUN npm install --save express 

COPY . /usr/src/pixi/web
COPY uploads/ /usr/src/pixi/web/uploads/

RUN npm install --unsafe-perm -g nodemon@1.11.0

EXPOSE 8000


EXPOSE 8000
CMD ["nodemon", "/usr/src/pixi/web/server.js", "npm run start"]