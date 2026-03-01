#!/bin/sh
# Start PHP-FPM in the background
php-fpm -D

# Start Nginx in the foreground so the container stays running
nginx -g "daemon off;"
