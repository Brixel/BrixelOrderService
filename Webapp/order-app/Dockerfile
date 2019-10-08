FROM node:10.13-alpine as builder
COPY . ./app
WORKDIR /app
RUN npm i
RUN $(npm bin)/ng build --prod


FROM nginx:latest
COPY --from=builder /app/dist/order-app /usr/share/nginx/html
