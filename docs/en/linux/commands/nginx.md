# `nginx` #

- **Purpose:** Nginx is a high-performance web server, reverse proxy, load balancer, and HTTP cache. It's designed to efficiently handle concurrent connections with minimal memory usage while providing excellent performance for serving static content and acting as a reverse proxy for dynamic applications. Nginx excels at load distribution, caching, and scaling applications by handling thousands of simultaneous connections. It can also function as an IMAP/POP3 proxy server and performs various other duties like URL rewriting, access control, rate limiting, and SSL termination.
- **Usage:** `nginx [OPTIONS]`

## Basic Usage ##

Start Nginx:

```bash
sudo nginx

```

Stop Nginx:

```bash
sudo nginx -s stop

```

Reload configuration without stopping:

```bash
sudo nginx -s reload

```

Test configuration syntax:

```bash
sudo nginx -t

```

Graceful restart:

```bash
sudo nginx -s quit

```

Start with specific configuration file:

```bash
sudo nginx -c /path/to/nginx.conf

```

Start with specific prefix path:

```bash
sudo nginx -p /custom/prefix/path

```

## Options ##

- `-c` — Use an alternative configuration file
- `-g` — Set global directives (for example, `pid /var/run/nginx.pid;`)
- `-p` — Set nginx prefix path
- `-s` — Send signal to process (stop, quit, reopen, reload)
- `-t` — Test configuration and exit
- `-T` — Test configuration with dump, then exit
- `-v` — Print version and exit
- `-V` — Print version, compiler report, configure arguments and exit
- `-h` — Print help information
- `-q` — Suppress non-error messages during configuration testing

## Shortcuts ##

Common Nginx operations:

```bash
# Check configuration syntax before applying #
sudo nginx -t

# Test configuration with more verbose output #
sudo nginx -T

# Start nginx service #
sudo systemctl start nginx

# Stop nginx service #
sudo systemctl stop nginx

# Restart nginx service #
sudo systemctl restart nginx

# Reload nginx configuration #
sudo systemctl reload nginx

# Check nginx status #
sudo systemctl status nginx

# Enable nginx to start at boot #
sudo systemctl enable nginx

# Check nginx process status #
ps aux | grep nginx

# View nginx version #
nginx -v

# View detailed version and compile info #
nginx -V

# View configuration file #
cat /etc/nginx/nginx.conf

# Open main configuration file for editing #
sudo nano /etc/nginx/nginx.conf

# Check specific site configuration #
sudo nginx -t -c /etc/nginx/sites-available/sitename

# Reload configuration (graceful - no dropped connections) #
sudo nginx -s reload

# Stop immediately (not graceful) #
sudo nginx -s stop

# Graceful shutdown (finish current requests) #
sudo nginx -s quit

# Reopen log files (useful after log rotation) #
sudo nginx -s reopen

# Test configuration with verbose output #
sudo nginx -t -c /etc/nginx/nginx.conf 2>&1

# Check for configuration errors in specific file #
sudo nginx -t -c /etc/nginx/conf.d/custom.conf

# View all nginx processes #
| ps aux | grep nginx | grep -v grep |

# Send signal directly to nginx process #
sudo kill -HUP $(cat /var/run/nginx.pid)

# Start nginx in foreground (for debugging) #
nginx -g "daemon off;"

# Start nginx with custom error level #
nginx -g "error_log /tmp/nginx_error.log warn;"

# Set worker processes to match CPU cores #
nginx -g "worker_processes auto;"

# Check server response #
curl -I http://localhost

# Check if nginx is listening on port 80 #
sudo netstat -tlnp | grep :80

# View nginx access logs #
tail -f /var/log/nginx/access.log

# View nginx error logs #
tail -f /var/log/nginx/error.log

# Count requests in access log #
tail -n 1000 /var/log/nginx/access.log | wc -l

# Find most visited URLs #
| awk '{print $7}' /var/log/nginx/access.log | sort | uniq -c | sort -nr | head -10 |

# Find most frequent IP addresses #
| awk '{print $1}' /var/log/nginx/access.log | sort | uniq -c | sort -nr | head -10 |

# Find HTTP error codes #
grep " 5[0-9][0-9] " /var/log/nginx/access.log

# Check for SSL configuration #
nginx -t && grep -r "ssl" /etc/nginx/

# Configure basic HTTP server block #
sudo tee /etc/nginx/sites-available/example << 'EOF'
server {
    listen 80;
    server_name example.com www.example.com;

    root /var/www/example.com;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
EOF

# Enable site configuration #
sudo ln -s /etc/nginx/sites-available/example /etc/nginx/sites-enabled/

# Test and reload configuration #
sudo nginx -t && sudo systemctl reload nginx

# Check which ports nginx is listening on #
sudo ss -tlnp | grep nginx

# View connection statistics #
| ss -an | grep :80 | wc -l |

# Monitor nginx performance #
sudo nginx -s quit && sudo nginx

# Create SSL certificate request #
sudo openssl req -new -newkey rsa:2048 -days 365 -nodes -x509 -keyout /etc/nginx/ssl/nginx.key -out /etc/nginx/ssl/nginx.crt

# Set up SSL configuration #
sudo tee /etc/nginx/sites-available/ssl-example << 'EOF'
server {
    listen 443 ssl;
    server_name example.com;

    ssl_certificate /etc/nginx/ssl/nginx.crt;
    ssl_certificate_key /etc/nginx/ssl/nginx.key;

    root /var/www/example.com;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
EOF

# Configure reverse proxy #
sudo tee /etc/nginx/conf.d/reverse-proxy.conf << 'EOF'
server {
    listen 80;
    server_name proxy.example.com;

    location / {
        proxy_pass http://backend_server:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

# Set up load balancing #
sudo tee /etc/nginx/conf.d/load-balancer.conf << 'EOF'
upstream backend {
    server app1:3000;
    server app2:3000;
    server app3:3000;
}

server {
    listen 80;
    server_name lb.example.com;

    location / {
        proxy_pass http://backend;
    }
}
EOF

# Configure caching #
sudo tee /etc/nginx/conf.d/cache.conf << 'EOF'
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=10g
                 inactive=60m use_temp_path=off;

server {
    listen 80;
    server_name cache.example.com;

    location / {
        proxy_pass http://backend;
        proxy_cache my_cache;
        proxy_cache_valid 200 1h;
        add_header X-Cache-Status $upstream_cache_status;
    }
}
EOF

# Set up rate limiting #
sudo tee /etc/nginx/conf.d/rate-limit.conf << 'EOF'
limit_req_zone $binary_remote_addr zone=mylimit:10m rate=10r/s;

server {
    listen 80;
    server_name limit.example.com;

    location / {
        limit_req zone=mylimit burst=20 nodelay;
        proxy_pass http://backend;
    }
}
EOF

# Enable gzip compression #
sudo sed -i '/#gzip  on;/a gzip on;\ngzip_vary on;\ngzip_min_length 1024;\ngzip_types text/plain text/css application/json application/javascript text/xml application/xml;' /etc/nginx/nginx.conf

# Check for duplicate server names #
| nginx -T 2>/dev/null | grep -E "server_name | listen" | sort | uniq -d |

# Find configuration files in nginx directory #
find /etc/nginx -type f -name "*.conf" | head -10

# Include additional configuration files #
echo "include /etc/nginx/conf.d/*.conf;" >> /etc/nginx/nginx.conf

# Configure access control #
sudo tee /etc/nginx/conf.d/restrict-access.conf << 'EOF'
location /private {
    allow 192.168.1.0/24;
    deny all;
}
EOF

# Set up URL rewriting #
sudo tee /etc/nginx/conf.d/rewrite.conf << 'EOF'
location /old-page {
    return 301 https://example.com/new-page;
}

location /api {
    rewrite ^/api/(.*)$ /$1 break;
    proxy_pass http://api_server;
}
EOF

# Monitor nginx with access log #
| tail -f /var/log/nginx/access.log | grep --line-buffered "POST\ | ERROR\ | 5[0-9][0-9]" |

# Configure basic authentication #
sudo htpasswd -bc /etc/nginx/.htpasswd username password
sudo tee /etc/nginx/conf.d/auth.conf << 'EOF'
location /protected {
    auth_basic "Restricted";
    auth_basic_user_file /etc/nginx/.htpasswd;
}
EOF

# Configure health checks #
sudo tee /etc/nginx/conf.d/health.conf << 'EOF'
location /health {
    access_log off;
    return 200 "healthy\n";
    add_header Content-Type text/plain;
}
EOF

# Set up different MIME types #
sudo tee /etc/nginx/conf.d/mime-types.conf << 'EOF'
types {
    text/html html htm shtml;
    text/css css;
    text/xml xml;
    image/gif gif;
    image/jpeg jpeg jpg;
    application/javascript js;
    text/plain txt;
    text/vnd.sun.j2me.app-descriptor jad;
    application/java-archive jar war ear;
    application/x-makeself makeself;
    application/x-perl pl pm;
    application/x-cocoa cco;
}
EOF

# Configure client request limits #
sudo tee /etc/nginx/conf.d/limits.conf << 'EOF'
client_max_body_size 10M;
client_body_buffer_size 128k;
client_header_buffer_size 1k;
large_client_header_buffers 4 4k;
</EOF>

# Set up websocket proxy #
sudo tee /etc/nginx/conf.d/websocket.conf << 'EOF'
location /websocket {
    proxy_pass http://backend;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_read_timeout 86400;
}
EOF

# Configure SSL with best practices #
sudo tee /etc/nginx/conf.d/ssl-best-practice.conf << 'EOF'
server {
    listen 443 ssl http2;
    server_name example.com;

    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
}
EOF

# Set up virtual hosts for multiple sites #
sudo mkdir -p /var/www/site1.com /var/www/site2.com
sudo tee /etc/nginx/sites-available/site1.com << 'EOF'
server {
    listen 80;
    server_name site1.com www.site1.com;
    root /var/www/site1.com;
    index index.html;
}
EOF

sudo tee /etc/nginx/sites-available/site2.com << 'EOF'
server {
    listen 80;
    server_name site2.com www.site2.com;
    root /var/www/site2.com;
    index index.html;
}
EOF

sudo ln -s /etc/nginx/sites-available/site1.com /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/site2.com /etc/nginx/sites-enabled/

# Configure error pages #
sudo tee /etc/nginx/conf.d/errors.conf << 'EOF'
error_page 404 /404.html;
error_page 500 502 503 504 /50x.html;

location = /404.html {
    root /usr/share/nginx/html;
}

location = /50x.html {
    root /usr/share/nginx/html;
}
EOF

# Set up directory listing #
sudo tee /etc/nginx/conf.d/autoindex.conf << 'EOF'
location /browse {
    autoindex on;
    autoindex_exact_size off;
    autoindex_localtime on;
}
EOF

# Configure upstream health checks #
sudo tee /etc/nginx/conf.d/upstream-health.conf << 'EOF'
upstream backend {
    server backend1.example.com max_fails=3 fail_timeout=30s;
    server backend2.example.com max_fails=3 fail_timeout=30s;
    server backup.example.com backup;
}
EOF

# Set up request/response buffering #
sudo tee /etc/nginx/conf.d/buffering.conf << 'EOF'
location /upload {
    proxy_buffering off;
    proxy_request_buffering off;
    client_max_body_size 0;
    proxy_pass http://backend;
}
EOF

# Configure advanced access logging #
sudo tee /etc/nginx/conf.d/advanced-logging.conf << 'EOF'
log_format detailed '$remote_addr - $remote_user [$time_local] '
                    '"$request" $status $body_bytes_sent '
                    '"$http_referer" "$http_user_agent" '
                    '$request_time $upstream_response_time';

access_log /var/log/nginx/access_detailed.log detailed;
EOF

# Set up server-side includes #
sudo tee /etc/nginx/conf.d/ssi.conf << 'EOF'
location / {
    ssi on;
    index index.html index.shtml;
}

location ~ \.shtml$ {
    ssi on;
    ssi_types text/html;
}
EOF

# Configure custom error responses #
sudo tee /etc/nginx/conf.d/custom-errors.conf << 'EOF'
location / {
    error_page 500 502 503 504 = @fallback;
}

location @fallback {
    return 302 https://backup.example.com$request_uri;
}
EOF

# Set up request mirroring #
sudo tee /etc/nginx/conf.d/mirror.conf << 'EOF'
location / {
    mirror /mirror;
    proxy_pass http://production;
}

location = /mirror {
    internal;
    proxy_pass http://analytics;
    proxy_pass_request_body off;
    proxy_set_header Content-Length "";
    proxy_pass_request_headers off;
}
EOF

# Configure rate limiting per location #
sudo tee /etc/nginx/conf.d/location-rate-limit.conf << 'EOF'
location /api/ {
    limit_req zone=api burst=5 nodelay;
    proxy_pass http://api_backend;
}

location /auth/ {
    limit_req zone=auth burst=3 nodelay;
    proxy_pass http://auth_backend;
}
EOF

# Set up complex request routing #
sudo tee /etc/nginx/conf.d/routing.conf << 'EOF'
map $http_user_agent $mobile_request {
| ~*android | iphone | mobile 1; |
    default 0;
}

server {
    listen 80;
    server_name example.com;

    location / {
        if ($mobile_request) {
            rewrite ^(.*)$ /mobile$1 last;
        }
        proxy_pass http://desktop_backend;
    }
}
EOF

# Configure access control with geo module #
sudo tee /etc/nginx/conf.d/geo-control.conf << 'EOF'
geo $country {
    default yes;
    include /etc/nginx/conf.d/countries.conf;
}

map $country $allow_access {
    default no;
    yes $country;
}

server {
    listen 80;
    server_name example.com;

    if ($allow_access = no) {
        return 403;
    }

    location / {
        proxy_pass http://backend;
    }
}
EOF

# Monitor performance and connections #
sudo nginx -V  # Check with compile options
sudo ss -s    # Show socket statistics
cat /var/run/nginx.pid && ps aux | grep nginx

```

## FAQ ##

### How Do I Restart Nginx Without Downtime? ###

Use the reload command:

```bash
sudo nginx -s reload

```

This reloads the configuration without dropping existing connections, performing a graceful restart.

### How Do I Test Nginx Configuration Before Applying? ###

Always test configuration before reloading:

```bash
sudo nginx -t

```

This checks the syntax and verifies that nginx can access required files. Use `-T` for more verbose output.

### What Is The Difference Between Nginx Signals? ###

- `reload` — Reload configuration, start new workers, gracefully stop old workers
- `reopen` — Reopen log files (useful after log rotation)
- `stop` — Stop immediately, not gracefully
- `quit` — Stop gracefully, finish current requests before stopping

### How Do I Configure Virtual Hosts With Nginx? ###

Create server blocks in configuration files:

```bash
# In /etc/nginx/sites-available/sitename #
server {
    listen 80;
    server_name example.com www.example.com;
    root /var/www/example.com;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}

```

Then enable with a symlink to sites-enabled directory.

### How Do I Set Up Reverse Proxy With Nginx? ###

Basic reverse proxy setup:

```bash
server {
    listen 80;
    server_name myapp.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

```

### How Do I Troubleshoot Common Nginx Issues? ###

Common troubleshooting steps:

1. Check configuration: `sudo nginx -t`
2. Check error logs: `sudo tail -f /var/log/nginx/error.log`
3. Check access logs: `sudo tail -f /var/log/nginx/access.log`
4. Verify permissions on document root
5. Check if nginx is running: `sudo systemctl status nginx`
6. Check port bindings: `sudo netstat -tlnp | grep nginx`
