FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

RUN npm install
RUN npm run build

EXPOSE 8080
CMD [ "node", "dist/index.js" ]
