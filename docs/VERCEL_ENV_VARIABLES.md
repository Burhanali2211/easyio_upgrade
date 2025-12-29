# 🔐 Vercel Environment Variables - Copy & Paste

## ⚠️ Important: Add These in Vercel Dashboard

**DO NOT** use the vercel.json file for environment variables. Add them directly in Vercel dashboard.

---

## 📋 Step-by-Step: Add Environment Variables

### In Vercel Dashboard:

1. Go to your project
2. Click **"Settings"** (top menu)
3. Click **"Environment Variables"** (left sidebar)
4. Add each variable **one by one** using the values below

---

## 🔑 Environment Variables to Add

### 1. NEXT_PUBLIC_SUPABASE_URL
```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://gihhpnkxhnvvrzseykbx.supabase.co
Environments: ✅ Production ✅ Preview ✅ Development
```

### 2. NEXT_PUBLIC_SUPABASE_ANON_KEY
```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpaGhwbmt4aG52dnJ6c2V5a2J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4NDM1MTgsImV4cCI6MjA4MjQxOTUxOH0.fNNsS9lZv-6VzrEBgF3bKcgC2sPzTnVUig8g10lviiE
Environments: ✅ Production ✅ Preview ✅ Development
```

### 3. SUPABASE_SERVICE_ROLE_KEY
```
Name: SUPABASE_SERVICE_ROLE_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpaGhwbmt4aG52dnJ6c2V5a2J4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Njg0MzUxOCwiZXhwIjoyMDgyNDE5NTE4fQ.Yz80y_W1pbHiDAqO_CDsBzBBrVD1N0nqka1HxycGzSk
Environments: ✅ Production ✅ Preview ✅ Development
```

### 4. DATABASE_URL
```
Name: DATABASE_URL
Value: postgresql://postgres.gihhpnkxhnvvrzseykbx:af3dWA455qUktVFS1SuNMdOFsFWemdO5rllHwSq3hhyNQacQ6HODmkgFgl2srxYK@aws-1-us-east-2.pooler.supabase.com:5432/postgres
Environments: ✅ Production ✅ Preview ✅ Development
```

### 5. NEXT_PUBLIC_SITE_URL
```
Name: NEXT_PUBLIC_SITE_URL
Value: https://easyio.tech
(Update this to your actual Vercel URL after first deployment)
Environments: ✅ Production ✅ Preview ✅ Development
```

### 6. TELEGRAM_BOT_TOKEN
```
Name: TELEGRAM_BOT_TOKEN
Value: 8269677486:AAEUWQg5Nixk2AJCLeoK1NNK4Ma7ZCT-0jM
Environments: ✅ Production ✅ Preview ✅ Development
```

### 7. TELEGRAM_CHAT_ID
```
Name: TELEGRAM_CHAT_ID
Value: 7658385347
Environments: ✅ Production ✅ Preview ✅ Development
```

---

## ✅ After Adding All Variables

1. **Save** each variable
2. Go back to **"Deployments"** tab
3. Click **"Redeploy"** on your latest deployment
4. Or push a new commit to trigger auto-deploy

---

## 🎯 Quick Fix for Current Error

1. **Remove the vercel.json file** (I've already fixed it)
2. **Add environment variables** in Vercel dashboard (Settings → Environment Variables)
3. **Redeploy** your project

---

## 📝 Important Notes

- ✅ Add variables in **Vercel Dashboard**, not in vercel.json
- ✅ Use the **actual values** from your .env file
- ✅ Check all three environments (Production, Preview, Development)
- ✅ After first deploy, update `NEXT_PUBLIC_SITE_URL` to your Vercel URL

---

**The vercel.json file has been fixed - it no longer references secrets!**

