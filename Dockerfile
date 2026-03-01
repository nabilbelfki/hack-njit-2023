FROM php:8.4-fpm-alpine

# Install Nginx and required dependencies for MySQL PDO
RUN apk update && apk add --no-cache nginx \
    && docker-php-ext-install pdo pdo_mysql

# Configure Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Setup application directory
WORKDIR /var/www/html
COPY . /var/www/html/

# Secure permissions
RUN chown -R nobody:nobody /var/www/html \
    && chown -R nobody:nobody /var/lib/nginx \
    && chown -R nobody:nobody /var/log/nginx

# Setup the initialization script and make it executable
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Expose port 80 for Nginx
EXPOSE 80

# Run both FPM and Nginx
CMD ["/start.sh"]
