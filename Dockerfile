FROM node:latest

# set compile-time env
ARG WEBSITE_API_HOST
ARG WEBSITE_TITLE
ENV WEBSITE_API_HOST=$WEBSITE_API_HOST
ENV WEBSITE_TITLE=$WEBSITE_TITLE

# copy files and compile
WORKDIR /app
COPY . .
RUN npm install
RUN npm i serve
RUN npm run build

EXPOSE 3000

CMD [ "npx", "serve", "-s", "dist" ]

