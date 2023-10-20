FROM node:16-alpine

RUN apk update

WORKDIR /app

ADD package.json .
ADD yarn.lock .

RUN yarn

ADD . .

RUN yarn build

EXPOSE 8000

CMD ["yarn", "start"]