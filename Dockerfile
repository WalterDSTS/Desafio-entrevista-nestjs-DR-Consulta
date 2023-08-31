FROM node:18 as development

WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

FROM node:18 as production

WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn install --only=prod
COPY . .
COPY --from=development /usr/src/app/dist ./dist
CMD yarn start:prod