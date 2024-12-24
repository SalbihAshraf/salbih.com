FROM nginx:alpine

# Copy the nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the game files
COPY dist/ /usr/share/nginx/html/


# Set permissions
RUN chmod -R 755 /usr/share/nginx/html