# FROM node:alpine
# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .
# CMD ["npm ","start"];

# FROM node:19.7.0
# WORKDIR /usr/src/app 
# COPY package*.json ./
# ADD package.json /usr/src/app/package.json
# RUN npm install
# RUN npm install react-scripts@1.1.0 -g
# COPY . .
# EXPOSE 3000 
# CMD ["npm ","start"];

FROM node:19.7.0

# Create app directory
RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY package-lock.json /app/package-lock.json
COPY package.json /app/package.json

# Bundle app source
COPY . /app

RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]