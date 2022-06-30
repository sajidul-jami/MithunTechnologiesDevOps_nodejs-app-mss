FROM node:10
WORKDIR /usr/app
COPY . .
RUN chmod u+x ./scripts/runApp.sh
RUN npm install
EXPOSE 9981
CMD ["sh","./scripts/runApp.sh"]
