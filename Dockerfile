# Use official Node.js LTS image
FROM node:20-slim

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy rest of the app
COPY . .

# Define port (the API uses 3000 by default)
EXPOSE 3000

# Run the app
CMD [ "node", "index.js" ]
