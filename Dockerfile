FROM node:18-alpine

RUN adduser -D appuser

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

USER appuser

EXPOSE 3000

CMD ["node", "app.js"]
