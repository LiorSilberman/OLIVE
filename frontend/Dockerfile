# Stage 1: Build the React app
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the project files into the Docker image
COPY . .

COPY .env .

# Build the app for production
RUN npm run build

# Expose port 5173 for the service
EXPOSE 5173

# Command to run the app
CMD ["npm", "run", "dev"]
