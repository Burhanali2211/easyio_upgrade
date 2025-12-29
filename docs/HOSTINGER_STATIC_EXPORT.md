# 📦 Static HTML Export for Hostinger Shared Hosting

## ⚠️ CRITICAL WARNING

**Static export will BREAK these features:**
- ❌ Contact form (won't submit)
- ❌ Admin dashboard (won't work)
- ❌ Image uploads (won't work)
- ❌ Telegram notifications (won't work)
- ❌ All API routes (won't work)
- ❌ Dynamic data from database (won't update)

**Only use this if you just want to display the website without interactive features!**

## 🔧 Setup for Static Export

### Step 1: Update next.config.ts

I'll configure it to export static HTML files.

### Step 2: Build Static Files

```bash
npm run build:static
```

### Step 3: Upload to Hostinger

1. Connect via FTP to your Hostinger account
2. Upload all files from the `out` folder to `public_html`
3. Make sure `index.html` is in the root of `public_html`

---

## 💡 Better Alternative

**For Hostinger VPS:** You can run the full Next.js app with all features.

**For Shared Hosting:** Consider using Vercel (free) which supports Next.js perfectly.

