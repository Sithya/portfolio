# 🚀 Complete GitHub Hosting Guide

## 📧 Step 1: Set Up EmailJS (Contact Form)

### 1.1 Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 1.2 Set Up Email Service
1. In EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Click "Gmail" → "Connect Account" → Allow permissions
   - **Outlook**: Click "Outlook" → Follow setup
   - **Other**: Choose "Other" and configure SMTP
4. Copy your **Service ID** (e.g., `service_abc123`)

### 1.3 Create Email Template
1. Click "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact from {{from_name}}

**Content:**
\`\`\`
Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio website
\`\`\`

4. Click "Save" and copy your **Template ID** (e.g., `template_xyz789`)

### 1.4 Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key** (e.g., `user_abcdef123`)

### 1.5 Test EmailJS
1. Go to "Test" tab in your template
2. Fill in test data and send
3. Check your email to confirm it works

---

## 🌐 Step 2: Prepare Your Portfolio for GitHub

### 2.1 Update Environment Variables
Create a `.env.local` file in your project root:

\`\`\`env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
\`\`\`

Replace the values with your actual EmailJS credentials.

### 2.2 Update Your Portfolio Data
Edit `app/config/portfolio-data.ts` with your real information:
- Your name, email, phone
- Your actual social media links
- Your real projects and skills
- Your CV file path

---

## 📁 Step 3: Push to GitHub

### 3.1 Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click the "+" icon → "New repository"
3. Repository name: `my-portfolio` (or any name you prefer)
4. Make it **Public**
5. **Don't** check "Add a README file"
6. Click "Create repository"

### 3.2 Push Your Code
Open terminal in your project folder and run:

\`\`\`bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
\`\`\`

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## 🚀 Step 4: Deploy to Vercel (Recommended)

### 4.1 Sign Up for Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your repositories

### 4.2 Deploy Your Portfolio
1. Click "New Project"
2. Find your portfolio repository and click "Import"
3. **Important**: Add your environment variables:
   - Click "Environment Variables"
   - Add each variable from your `.env.local` file:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. Click "Deploy"
5. Wait 2-3 minutes for deployment to complete

### 4.3 Your Portfolio is Live! 🎉
- You'll get a URL like: `https://my-portfolio-username.vercel.app`
- Every time you push to GitHub, Vercel automatically redeploys
- Your contact form will send emails to your inbox

---

## 🔧 Step 5: Alternative - GitHub Pages (Static Only)

If you prefer GitHub Pages (free but more limited):

### 5.1 Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### 5.2 Configure for Static Export
Add this to your `next.config.mjs`:

\`\`\`javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

export default nextConfig
\`\`\`

### 5.3 Build and Deploy
\`\`\`bash
# Build static version
npm run build

# The static files will be in the 'out' folder
# GitHub Pages will serve from this folder
\`\`\`

**Note**: GitHub Pages doesn't support server-side features, but EmailJS works because it's client-side.

---

## ✅ Step 6: Final Checklist

### Before Going Live:
- [ ] Replace all placeholder content with your real information
- [ ] Add your actual CV file to `public/cv/`
- [ ] Update social media links in config file
- [ ] Test contact form with EmailJS
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test dark/light mode toggle

### After Deployment:
- [ ] Test contact form on live site
- [ ] Check that you receive emails
- [ ] Share your portfolio URL!
- [ ] Add portfolio link to your resume
- [ ] Update LinkedIn with portfolio link

---

## 🎯 Your Portfolio URLs

**Vercel**: `https://your-project-name.vercel.app`
**GitHub Pages**: `https://your-username.github.io/repository-name`

---

## 🆘 Troubleshooting

### Contact Form Not Working?
1. Check EmailJS credentials in environment variables
2. Verify EmailJS service is connected
3. Test EmailJS template manually
4. Check browser console for errors

### Deployment Issues?
1. Make sure all files are committed to GitHub
2. Check Vercel deployment logs
3. Verify environment variables are set
4. Ensure no syntax errors in code

### Need Help?
- EmailJS Documentation: [docs.emailjs.com](https://www.emailjs.com/docs/)
- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- GitHub Pages: [pages.github.com](https://pages.github.com/)

---

## 🎉 Congratulations!

Your portfolio is now live and professional! People can:
- View your work and skills
- Contact you through the form (emails go to your inbox)
- Download your CV
- Connect with you on social media

Share your portfolio URL everywhere! 🚀
