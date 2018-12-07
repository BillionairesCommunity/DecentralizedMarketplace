FROM node:10

RUN mkdir /app

WORKDIR /app

RUN npm install -g pm2

EXPOSE 3000