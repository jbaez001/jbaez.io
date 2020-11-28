FROM node:erbium-buster

WORKDIR /opt/jbaez.io/

COPY . .

RUN yarn

EXPOSE 3000

CMD [ "node", "./bin/www" ]
