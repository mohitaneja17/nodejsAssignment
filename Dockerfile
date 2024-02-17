# Use the official Node.js 14 image as a base
FROM node:14

# Set the working directory in the container
WORKDIR /

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Expose port 3002
EXPOSE 3002

# Command to run your application
CMD ["node", "index.js"]

