FROM docker.io/node:20 AS dev

WORKDIR /app

ENV NODE_ENV=dev

COPY . /app

RUN npm install

EXPOSE 3001

CMD ["node", "/app/src/index.js"]