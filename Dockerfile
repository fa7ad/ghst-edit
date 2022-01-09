FROM node:14-alpine

RUN apk add --no-cache --update yarn

WORKDIR /usr/src/app

ENV PORT=3000
EXPOSE ${PORT}

COPY package.json yarn.lock ./

RUN yarn && yarn global add nodemon

COPY . .

CMD ["yarn", "start"]