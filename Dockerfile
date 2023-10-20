FROM node:16-alpine

RUN apk update

WORKDIR /app

ADD package.json .
ADD yarn.lock .

RUN yarn

ADD . .

RUN yarn build

CMD ["yarn", "start"]