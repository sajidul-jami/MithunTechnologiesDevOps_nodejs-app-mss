FROM node:10
WORKDIR /usr/app
COPY . .
RUN chmod u+x /usr/app
RUN npm install
EXPOSE 9981
CMD ["sh","/scripts/runApp.sh"]
