# Use Node.js as the base image for building
FROM node:16 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY frontend/package.json ./
RUN npm install

# Copy the rest of the application files and build
COPY frontend/ ./
RUN npm run build

# Use nginx to serve the built app
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80
