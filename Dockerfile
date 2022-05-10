FROM node:17.8-alpine3.15 AS base
WORKDIR /base
COPY package*.json ./
RUN npm ci
COPY . .

FROM base AS build

# Build envs
ARG NEXT_BUILD_DATE
ENV NEXT_PUBLIC_BUILD_DATE=$NEXT_BUILD_DATE

ARG NEXT_CMS_URL
ENV NEXT_CMS_URL=$NEXT_CMS_URL

ARG NEXT_PUBLIC_ENV_EXAMPLE
ENV NEXT_PUBLIC_ENV_EXAMPLE=$NEXT_PUBLIC_ENV_EXAMPLE

ARG ENV_EXAMPLE
ENV ENV_EXAMPLE=$ENV_EXAMPLE

ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN npm run build

FROM node:17.8-alpine3.15 AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/next.config.js ./
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
RUN VERSION_NEXT=`node -p -e "require('./package.json').dependencies.next"`&& npm install --no-package-lock --no-save next@"$VERSION_NEXT"

# Runtime envs
ARG ENV_EXAMPLE
ENV ENV_EXAMPLE=$ENV_EXAMPLE

ARG NEXT_PUBLIC_ENV_EXAMPLE
ENV NEXT_PUBLIC_ENV_EXAMPLE=$NEXT_PUBLIC_ENV_EXAMPLE

CMD npm run start
