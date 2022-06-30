FROM node:10
RUN npm install
WORKDIR /usr/app
COPY . .
EXPOSE 9981
CMD ["node","app.js"]
