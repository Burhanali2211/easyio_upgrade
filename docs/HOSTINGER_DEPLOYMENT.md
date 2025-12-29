# 🚀 Hostinger Deployment Guide

## ⚠️ Important Notice

Your Next.js app has **server-side features** that require Node.js:
- Contact form API
- Admin dashboard with authentication
- Image upload API
- Telegram bot integration
- Database connections

**Hostinger Shared Hosting** only supports static HTML files, which means these features won't work.

## 🎯 Two Options:

### Option 1: Hostinger VPS (Recommended) ⭐

If you have **Hostinger VPS hosting**, you can run the full Next.js app with all features.

#### Setup Steps:

1. **SSH into your VPS:**
   ```bash
   ssh root@your-server-ip
   ```

2. **Install Node.js:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Upload your project** (via Git or FTP)

4. **Install dependencies:**
   ```bash
   cd /path/to/your/project
   npm install --legacy-peer-deps
   ```

5. **Create .env file** with all your environment variables

6. **Build and start:**
   ```bash
   npm run build
   npm start
   ```

7. **Use PM2 to keep it running:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "easyio" -- start
   pm2 save
   ```

8. **Configure Nginx** as reverse proxy to port 3000

---

### Option 2: Static HTML Export (Limited) ⚠️

**WARNING:** This will break:
- ❌ Contact form submissions
- ❌ Admin dashboard
- ❌ Image uploads  
- ❌ Telegram notifications
- ❌ All API routes

I'll set this up for you, but you'll lose these features.

---

## 💡 Best Recommendation

**Use Vercel (FREE)** - It's specifically designed for Next.js:
- ✅ All features work perfectly
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Auto-deployments
- ✅ Zero configuration

Would you like me to:
1. Set up static export for Hostinger shared hosting (with limitations)?
2. Help you deploy to Vercel instead (recommended)?
3. Set up Hostinger VPS configuration?
