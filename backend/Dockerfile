# Use the official Node.js 16 image as a parent image
FROM node:16

# Set the working directory in the Docker container
WORKDIR /usr/src/app

COPY package*.json ./

# Install the dependencies in the container
RUN npm install

COPY . .

# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

# Here we will use the "start" script defined in your package.json
CMD [ "npm", "start" ]
