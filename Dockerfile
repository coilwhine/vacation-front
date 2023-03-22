FROM node:18-alpine3.16

RUN mkdir /root/vacation-front

WORKDIR /root/vacation-front

COPY . /root/vacation-front

RUN npm install

RUN npm run build

EXPOSE 3000

CMD npm run dev

# tsc and udp // what is that?