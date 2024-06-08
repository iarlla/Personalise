FROM node:20 AS dev
WORKDIR /app
ENV NODE_ENV=dev
COPY . /app
RUN npm install
CMD ["npm", "start"]