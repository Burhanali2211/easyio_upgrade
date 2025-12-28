# 🚀 Hostinger Deployment - Complete Guide

## ⚠️ CRITICAL: Your App Has Server Features

Your website includes:
- ✅ Contact form (needs API)
- ✅ Admin dashboard (needs authentication)
- ✅ Image uploads (needs API)
- ✅ Telegram notifications (needs server)
- ✅ Database connections (needs server)

**These require Node.js and cannot work with static HTML alone!**

---

## 🎯 Option 1: Hostinger VPS (Best for Full Features)

If you have **Hostinger VPS**, you can run everything:

### Quick Setup:

1. **SSH into your server:**
   ```bash
   ssh root@your-server-ip
   ```

2. **Install Node.js 18+:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Upload your project** to `/var/www/easyio` (via FTP or Git)

4. **Install dependencies:**
   ```bash
   cd /var/www/easyio
   npm install --legacy-peer-deps
   ```

5. **Create `.env` file:**
   ```bash
   nano .env
   ```
   Add all your environment variables

6. **Build and start:**
   ```bash
   npm run build
   npm start
   ```

7. **Keep it running with PM2:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "easyio" -- start
   pm2 save
   pm2 startup
   ```

8. **Configure Nginx:**
   ```bash
   sudo nano /etc/nginx/sites-available/easyio
   ```
   
   Add:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
   
   Enable:
   ```bash
   sudo ln -s /etc/nginx/sites-available/easyio /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

9. **Add SSL:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

**✅ All features will work!**

---

## ⚠️ Option 2: Static HTML Export (Limited - Breaks Features)

**ONLY use this if you have shared hosting and don't need:**
- Contact forms
- Admin dashboard
- Image uploads
- Telegram notifications

### Steps:

1. **Enable static export in `next.config.ts`:**
   Uncomment this line:
   ```typescript
   output: 'export',
   ```

2. **Build static files:**
   ```bash
   npm run build:static
   ```

3. **Upload to Hostinger:**
   - Connect via FTP
   - Upload everything from `out` folder to `public_html`
   - Make sure `index.html` is in root

**❌ Contact form, admin, and APIs won't work!**

---

## 💡 Recommended: Use Vercel (FREE & Better)

**Vercel is FREE and perfect for Next.js:**

1. Go to [vercel.com](https://vercel.com)
2. Sign up (free)
3. Import your GitHub repo
4. Add environment variables
5. Deploy (takes 2 minutes)

**Benefits:**
- ✅ All features work
- ✅ Free SSL
- ✅ Global CDN
- ✅ Auto-deployments
- ✅ Better performance

---

## ❓ Which Hostinger Plan Do You Have?

**Check your Hostinger plan:**

- **Shared Hosting** → Only static HTML (breaks features) OR use Vercel
- **VPS Hosting** → Can run full Next.js app (Option 1 above)
- **Cloud Hosting** → Can run full Next.js app (Option 1 above)

---

## 🆘 Need Help?

Tell me which Hostinger plan you have, and I'll provide exact steps!

