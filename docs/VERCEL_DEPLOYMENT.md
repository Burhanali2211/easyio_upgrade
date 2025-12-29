# 🚀 Deploy to Vercel - Step by Step Guide

## ✅ Pre-Deployment Checklist

- [x] Build completed successfully
- [x] All code is ready
- [ ] Git repository initialized
- [ ] Code pushed to GitHub/GitLab/Bitbucket
- [ ] Vercel account created

---

## 📋 Step-by-Step Deployment

### Step 1: Push to Git Repository

If you haven't already:

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Production ready - Deploy to Vercel"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/easyio.git

# Push to GitHub
git push -u origin main
```

### Step 2: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Sign up with GitHub (recommended) or email

### Step 3: Import Project

1. In Vercel dashboard, click **"Add New Project"**
2. Click **"Import Git Repository"**
3. Select your repository
4. Click **"Import"**

### Step 4: Configure Project

Vercel will auto-detect Next.js. You just need to:

1. **Project Name:** `easyio` (or your choice)
2. **Framework Preset:** Next.js (auto-detected)
3. **Root Directory:** `./` (default)
4. **Build Command:** `npm run build` (auto-detected)
5. **Output Directory:** `.next` (auto-detected)
6. **Install Command:** `npm install` (auto-detected)

### Step 5: Add Environment Variables

**CRITICAL:** Add these in Vercel dashboard before deploying:

Click **"Environment Variables"** and add:

```
NEXT_PUBLIC_SUPABASE_URL
= https://gihhpnkxhnvvrzseykbx.supabase.co

NEXT_PUBLIC_SUPABASE_ANON_KEY
= eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpaGhwbmt4aG52dnJ6c2V5a2J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4NDM1MTgsImV4cCI6MjA4MjQxOTUxOH0.fNNsS9lZv-6VzrEBgF3bKcgC2sPzTnVUig8g10lviiE

SUPABASE_SERVICE_ROLE_KEY
= eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpaGhwbmt4aG52dnJ6c2V5a2J4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Njg0MzUxOCwiZXhwIjoyMDgyNDE5NTE4fQ.Yz80y_W1pbHiDAqO_CDsBzBBrVD1N0nqka1HxycGzSk

DATABASE_URL
= postgresql://postgres.gihhpnkxhnvvrzseykbx:af3dWA455qUktVFS1SuNMdOFsFWemdO5rllHwSq3hhyNQacQ6HODmkgFgl2srxYK@aws-1-us-east-2.pooler.supabase.com:5432/postgres

NEXT_PUBLIC_SITE_URL
= https://your-app-name.vercel.app (or your custom domain)

TELEGRAM_BOT_TOKEN
= 8269677486:AAEUWQg5Nixk2AJCLeoK1NNK4Ma7ZCT-0jM

TELEGRAM_CHAT_ID
= 7658385347
```

**Important:**
- Add each variable separately
- Select **"Production"**, **"Preview"**, and **"Development"** for each
- Click "Save" after each variable

### Step 6: Deploy!

1. Click **"Deploy"** button
2. Wait 2-3 minutes for build
3. Your site will be live at `https://your-app-name.vercel.app`

---

## 🎉 Post-Deployment

### 1. Test Your Site

- [ ] Homepage loads
- [ ] Navigation works
- [ ] Contact form submits
- [ ] Admin dashboard accessible
- [ ] Images load correctly

### Step 2: Add Custom Domain (Optional)

1. Go to **Settings → Domains**
2. Add your domain (e.g., `easyio.tech`)
3. Update DNS records as shown:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Or A record: `@` → Vercel IP (shown in dashboard)
4. SSL will be automatically configured (free)

### Step 3: Configure Telegram (If Using)

1. Make sure you've sent a message to your bot first
2. Test: Visit `https://your-app.vercel.app/api/telegram-test`
3. You should receive a test message

---

## 🔄 Auto-Deployments

Vercel automatically:
- ✅ Deploys on every Git push
- ✅ Creates preview deployments for PRs
- ✅ Runs builds automatically
- ✅ Updates production on main branch

---

## 📊 Monitoring

Vercel provides:
- **Analytics:** Built-in (enable in dashboard)
- **Logs:** View in deployment details
- **Performance:** Automatic monitoring
- **Uptime:** 99.99% SLA

---

## 🆘 Troubleshooting

### Build Fails?
- Check environment variables are set
- Check build logs in Vercel dashboard
- Verify all dependencies are in package.json

### API Routes Not Working?
- Verify environment variables
- Check Vercel function logs
- Ensure service role key is set

### Contact Form Not Working?
- Check Supabase connection
- Verify API route is deployed
- Check browser console for errors

---

## ✅ You're All Set!

Your website will be live globally in minutes with:
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Automatic deployments
- ✅ All features working
- ✅ Professional hosting

**Next:** Push to Git and import to Vercel!

