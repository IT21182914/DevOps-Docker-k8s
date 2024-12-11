# Use Node.js as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY backend/package.json ./
RUN npm install

# Copy the rest of the application files
COPY backend/ ./

# Expose the port the app runs on
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]
