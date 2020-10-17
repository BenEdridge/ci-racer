FROM node:14.14.0-buster
WORKDIR /usr/src/app

RUN apt-get -y update
RUN apt-get install -y python

COPY . .
RUN npm install
ENTRYPOINT ["npm", "run", "start"]