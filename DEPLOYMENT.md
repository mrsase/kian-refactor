# KianGreenUp Deployment Guide

This guide walks you through deploying the KianGreenUp website on a VPS with Nginx and Let's Encrypt SSL.

## Prerequisites

- A VPS (Ubuntu 22.04 LTS recommended)
- A domain name pointing to your VPS IP
- SSH access to your server
- Node.js 20+ installed on the server

---

## 1. Server Setup

### Connect to your VPS

```bash
ssh root@your-server-ip
```

### Update system and install dependencies

```bash
apt update && apt upgrade -y
apt install -y curl git nginx certbot python3-certbot-nginx
```

### Install Node.js 20

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
apt install -y nodejs
node -v  # Should show v20.x.x
```

### Create a non-root user (recommended)

```bash
adduser deploy
usermod -aG sudo deploy
su - deploy
```

---

## 2. Deploy the Application

### Clone or upload your project

```bash
cd /home/deploy
git clone your-repo-url kiangreenup
# OR upload via scp:
# scp -r ./dist deploy@your-server-ip:/home/deploy/kiangreenup
```

### Install dependencies and build

```bash
cd kiangreenup
npm install
npm run build
```

### Create environment file

```bash
cp .env.example .env
nano .env
```

Fill in your Gmail credentials:
```env
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx
EMAIL_DESTINATION=manager@yourcompany.com
```

### Test the build locally

```bash
node .output/server/index.mjs
# Should start on port 3000
# Press Ctrl+C to stop
```

---

## 3. Setup PM2 Process Manager

### Install PM2 globally

```bash
sudo npm install -g pm2
```

### Create PM2 ecosystem file

```bash
nano ecosystem.config.cjs
```

Add this content:
```javascript
module.exports = {
  apps: [{
    name: 'kiangreenup',
    script: '.output/server/index.mjs',
    cwd: '/home/deploy/kiangreenup',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
    },
  }],
};
```

### Start the application

```bash
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
# Run the command it outputs to enable auto-start on boot
```

### Useful PM2 commands

```bash
pm2 status          # Check status
pm2 logs kiangreenup # View logs
pm2 restart kiangreenup # Restart app
pm2 stop kiangreenup    # Stop app
```

---

## 4. Configure Nginx

### Create Nginx configuration

```bash
sudo nano /etc/nginx/sites-available/kiangreenup
```

Add this content (replace `yourdomain.com` with your actual domain):

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400;
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json application/xml;
    gzip_comp_level 6;
}
```

### Enable the site

```bash
sudo ln -s /etc/nginx/sites-available/kiangreenup /etc/nginx/sites-enabled/
sudo nginx -t  # Test configuration
sudo systemctl reload nginx
```

---

## 5. Setup SSL with Let's Encrypt

### Obtain SSL certificate

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Follow the prompts:
1. Enter your email address
2. Agree to terms of service
3. Choose whether to redirect HTTP to HTTPS (recommended: Yes)

### Verify auto-renewal

```bash
sudo certbot renew --dry-run
```

Certbot automatically sets up a cron job for renewal.

---

## 6. Firewall Configuration

### Setup UFW firewall

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

---

## 7. Final Nginx Configuration (after SSL)

After Certbot runs, your config will be updated. Verify it looks like this:

```bash
sudo nano /etc/nginx/sites-available/kiangreenup
```

Should include:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json application/xml;
    gzip_comp_level 6;
}
```

---

## 8. Updating the Application

When you need to deploy updates:

```bash
cd /home/deploy/kiangreenup
git pull origin main  # or upload new files
npm install
npm run build
pm2 restart kiangreenup
```

---

## 9. Monitoring & Logs

### View application logs

```bash
pm2 logs kiangreenup
pm2 logs kiangreenup --lines 100  # Last 100 lines
```

### View Nginx logs

```bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Monitor server resources

```bash
htop  # Install with: apt install htop
```

---

## 10. Troubleshooting

### Application not starting
```bash
pm2 logs kiangreenup --err  # Check error logs
node .output/server/index.mjs  # Run manually to see errors
```

### 502 Bad Gateway
- Check if the app is running: `pm2 status`
- Check if port 3000 is correct: `netstat -tlnp | grep 3000`
- Restart the app: `pm2 restart kiangreenup`

### SSL certificate issues
```bash
sudo certbot certificates  # Check certificate status
sudo certbot renew --force-renewal  # Force renewal
```

### Permission issues
```bash
sudo chown -R deploy:deploy /home/deploy/kiangreenup
```

---

## Quick Reference

| Task | Command |
|------|---------|
| Start app | `pm2 start ecosystem.config.cjs` |
| Stop app | `pm2 stop kiangreenup` |
| Restart app | `pm2 restart kiangreenup` |
| View logs | `pm2 logs kiangreenup` |
| Reload Nginx | `sudo systemctl reload nginx` |
| Test Nginx config | `sudo nginx -t` |
| Renew SSL | `sudo certbot renew` |
| Check firewall | `sudo ufw status` |

---

## Security Checklist

- [x] Non-root user for deployment
- [x] UFW firewall enabled
- [x] SSL/TLS with Let's Encrypt
- [x] Environment variables in `.env` (not in git)
- [x] PM2 for process management
- [x] Nginx as reverse proxy

Your site should now be live at `https://yourdomain.com`!
