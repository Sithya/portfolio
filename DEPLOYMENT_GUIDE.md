# 🚀 Portfolio Deployment Guide

## 📧 Contact Form Messages - Where to See Them

### Option 1: Check Hosting Platform Logs (Easiest)
When someone sends a message through your contact form, you can see it in your hosting platform's logs:

**Vercel:**
1. Go to your Vercel dashboard
2. Click on your project
3. Go to "Functions" tab
4. Click on any function execution to see logs
5. Messages will appear in the console logs

**Netlify:**
1. Go to your Netlify dashboard
2. Click on your site
3. Go to "Functions" tab
4. Check the function logs

### Option 2: Email Integration (Recommended)
To receive messages via email, uncomment and configure one of these services in `/app/api/contact/route.ts`:

**Using Resend (Free tier available):**
\`\`\`bash
npm install resend
\`\`\`
\`\`\`typescript
import { Resend } from 'resend'
const resend = new Resend('your-api-key')

// In your API route:
await resend.emails.send({
  from: 'portfolio@yourdomain.com',
  to: 'your-email@example.com',
  subject: `New contact from ${name}`,
  html: `<p><strong>Name:</strong> ${name}</p>...`
})
\`\`\`

**Using EmailJS (Client-side, easier setup):**
1. Sign up at emailjs.com
2. Create an email template
3. Use their React SDK to send emails directly from the frontend

### Option 3: Database Storage
Store messages in a database like Supabase or MongoDB and create an admin panel to view them.

---

## 🌐 Hosting Your Portfolio on GitHub & Vercel

### Step 1: Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to github.com
   - Click "New repository"
   - Name it something like "my-portfolio"
   - Make it public
   - Don't initialize with README (since you already have code)

2. **Push your code to GitHub:**
   \`\`\`bash
   # In your project folder
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/my-portfolio.git
   git push -u origin main
   \`\`\`

### Step 2: Deploy to Vercel (Recommended)

1. **Sign up/Login to Vercel:**
   - Go to vercel.com
   - Sign up with your GitHub account

2. **Deploy your portfolio:**
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Next.js project
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

3. **Custom Domain (Optional):**
   - Buy a domain from any provider
   - In Vercel dashboard, go to your project settings
   - Add your custom domain
   - Update your domain's DNS settings as instructed

### Step 3: Alternative - GitHub Pages (Static Only)

If you want to use GitHub Pages (free but limited):

1. **Build static version:**
   \`\`\`bash
   npm run build
   npm run export
   \`\`\`

2. **Enable GitHub Pages:**
   - Go to your repo settings
   - Scroll to "Pages" section
   - Select source: "Deploy from a branch"
   - Choose "main" branch and "/docs" folder
   - Move your `out` folder contents to a `docs` folder

### Step 4: Environment Variables (If needed)

For contact form or other features requiring API keys:

**In Vercel:**
1. Go to your project settings
2. Click "Environment Variables"
3. Add your variables (e.g., `RESEND_API_KEY`)

**In your code:**
\`\`\`typescript
// Use environment variables
const apiKey = process.env.RESEND_API_KEY
\`\`\`

---

## 🔧 Quick Setup Commands

\`\`\`bash
# Clone your repo (if starting fresh)
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Deploy to Vercel (install Vercel CLI first)
npm i -g vercel
vercel --prod
\`\`\`

---

## 📱 Mobile Optimization

Your portfolio is already mobile-optimized, but test it on:
- Different screen sizes
- Various browsers
- Mobile devices

---

## 🎯 SEO Optimization

Your portfolio includes:
- ✅ Meta tags
- ✅ Open Graph data
- ✅ Semantic HTML
- ✅ Fast loading
- ✅ Mobile responsive

---

## 🚀 Going Live Checklist

- [ ] Replace all placeholder content with your real information
- [ ] Add your actual CV file
- [ ] Update social media links
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Set up contact form email notifications
- [ ] Add Google Analytics (optional)
- [ ] Test on different browsers
- [ ] Share your portfolio URL!

Your portfolio will be live at: `https://your-project-name.vercel.app`
