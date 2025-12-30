FROM docker.io/node:22-alpine
ENV NODE_ENV=production

WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev && npm cache clean --force
COPY . .
USER node
EXPOSE 3000

CMD ["npm", "start"]
