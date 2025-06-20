# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies  RUN npm install --only=producti
RUN npm install 

# Copy all source files
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start the chatbot server
CMD ["node", "server.js"]
