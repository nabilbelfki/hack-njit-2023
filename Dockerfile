FROM php:8.4-fpm-alpine

# Install nginx, supervisor, and PHP extensions in one layer
RUN apk add --no-cache \
    nginx \
    supervisor \
    && docker-php-ext-install pdo pdo_mysql \
    && mkdir -p /var/log/supervisor /var/log/nginx /run/nginx

# Nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Supervisord config
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

WORKDIR /var/www/html

COPY --chown=nobody:nobody . /var/www/html

RUN find /var/www/html -type d -exec chmod 755 {} \; \
    && find /var/www/html -type f -exec chmod 644 {} \;

EXPOSE 80
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]