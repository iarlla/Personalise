FROM registry.access.redhat.com/ubi9/nginx-120

WORKDIR /app

COPY . .

RUN npm install && \
    npm run build

COPY ./dist /opt/app-root/src

# Copiar a configuração personalizada do Nginx
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]