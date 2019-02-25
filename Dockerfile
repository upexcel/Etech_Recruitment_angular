FROM node:8
RUN npm install -g @angular/cli@1.7.1
WORKDIR /app
COPY . /app

RUN npm install
RUN ng build --prod


FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=0 /app/dist /usr/share/nginx/html
