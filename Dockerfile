FROM node:18 as development

WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

FROM node:18 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn install --only=prod
COPY . .
COPY --from=development /usr/src/app/dist ./dist
# RUN yarn migration:run
CMD yarn start:prod