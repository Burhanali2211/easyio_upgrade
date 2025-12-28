# ⚡ Quick Deploy to Vercel - 3 Steps!

## ✅ Step 1: Push to GitHub

```bash
# Add all files
git add .

# Commit
git commit -m "Production ready - Deploy to Vercel"

# Create repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/easyio-website.git
git branch -M main
git push -u origin main
```

**Don't have GitHub?** Create account at [github.com](https://github.com) (free)

---

## ✅ Step 2: Deploy on Vercel

1. **Go to [vercel.com](https://vercel.com)**
   - Sign up with GitHub (easiest)

2. **Click "Add New Project"**

3. **Import your GitHub repository**

4. **Add Environment Variables** (IMPORTANT!):
   
   Click "Environment Variables" → Add each:

   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_SUPABASE_URL` | `https://gihhpnkxhnvvrzseykbx.supabase.co` |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (from .env) |
   | `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (from .env) |
   | `DATABASE_URL` | `postgresql://postgres.gihhpnkxhnvvrzseykbx:...` (from .env) |
   | `NEXT_PUBLIC_SITE_URL` | `https://your-app.vercel.app` (update after deploy) |
   | `TELEGRAM_BOT_TOKEN` | `8269677486:AAEUWQg5Nixk2AJCLeoK1NNK4Ma7ZCT-0jM` |
   | `TELEGRAM_CHAT_ID` | `7658385347` |

   **For each variable:** Check ✅ Production, ✅ Preview, ✅ Development

5. **Click "Deploy"** 🚀

---

## ✅ Step 3: Update Site URL

After deployment:

1. Copy your Vercel URL (e.g., `https://easyio.vercel.app`)
2. Go to Settings → Environment Variables
3. Update `NEXT_PUBLIC_SITE_URL` to your Vercel URL
4. Redeploy (or wait for auto-deploy)

---

## 🎉 Done!

Your site is live at: `https://your-app.vercel.app`

**Features:**
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Auto-deploy on every Git push
- ✅ All features working
- ✅ Professional hosting

---

## 🔗 Next Steps

1. **Add Custom Domain:**
   - Settings → Domains → Add your domain
   - Update DNS as shown
   - Free SSL automatic!

2. **Test Everything:**
   - Contact form
   - Admin dashboard
   - Telegram notifications

3. **Share with the world!** 🌍

---

**Need help?** Check `DEPLOY_TO_VERCEL.md` for detailed instructions!

