FROM registry.access.redhat.com/ubi9/nginx-120

WORKDIR /app

COPY . .

USER root

RUN yum install npm -y && \
    npm install && \
    npm run build && \
    cp -r ./dist/* /opt/app-root/src

# Copiar a configuração personalizada do Nginx
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

USER 1001

CMD ["nginx", "-g", "daemon off;"]