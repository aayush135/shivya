FROM node:16.14.2-alpine3.15.4

LABEL author="Ayush Singh"

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 8080

CMD ["npm","run","dev"]