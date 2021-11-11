FROM node:14.16.1-alpine AS server

ENV NODE_ENV production

WORKDIR /app
COPY . .
RUN npm i
RUN npm run build
EXPOSE 3000
CMD ["npm","start"]
