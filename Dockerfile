FROM node:16.15-alpine3.14
WORKDIR /app
ADD package.json package.json
RUN npm install

EXPOSE 3000
CMD [ "npm", "run", "pm2" ]