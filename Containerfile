#Use RHEL8 UBI node 18 image as base
FROM docker.io/node:22-alpine

# Set environment variable as development
ENV NODE_ENV=development

# Defining work directory
WORKDIR /usr/src/app

# Copy the packages from remote directory to container work directory
COPY --chown=1001:1001 package.json ./

# Install all dependacies using npm
RUN npm install

# Copy the application to container
COPY --chown=1001:1001 . /usr/src/app

# Expose the 3000 port to accept upcomming traffic
EXPOSE 3000

# Execute the start script
CMD ["npm", "start"] 
