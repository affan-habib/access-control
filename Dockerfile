# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the project files to the container
COPY . .

# Install project dependencies and build the React app
RUN npm ci --only=production

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to start the app
CMD [ "npm", "start" ]
