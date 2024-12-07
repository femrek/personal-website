FROM node:latest

WORKDIR /app

RUN npm install -g serve

CMD [ "serve", "." ]

