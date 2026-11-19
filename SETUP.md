# 🚀 Setup Guide - Cinnamon Health Website

This guide will help you get your website up and running in minutes!

## 📋 Prerequisites

- Your Cinnamon Health logo (PNG format)
- Product photos (from the images you provided)
- High-quality images for heritage and lifestyle sections
- Contact information (email, phone, address)
- Social media links

## 🎯 Step-by-Step Setup

### Step 1: Add Your Logo

1. **Prepare your logo:**
   - Save as `logo.png`
   - Transparent background recommended
   - Optimal size: 200-300px width
   - High resolution for retina displays

2. **Place the logo:**
   ```bash
   cp /path/to/your/logo.png assets/logo.png
   ```

3. **Verify:**
   - Open `index.html` in a browser
   - Your logo should appear in the navigation bar

---

### Step 2: Add Product Images

You have great product photos! Let's use them:

#### **Featured Product Image** (Tea with Cinnamon Stick)

Use one of your product photos showing the tea package clearly:

```bash
# Use the best clear shot of the product package
cp /path/to/product-photo.jpg assets/featured-product.jpg
```

**Recommended:** Use the image showing:
- The package with "5 Tea Bags" label
- Good lighting
- Clean background

#### **Product Card Images**

```bash
# Tea with Cinnamon Stick product card
cp /path/to/tea-product-1.jpg assets/product-tea-stick.jpg

# Premium Ceylon Cinnamon product card
cp /path/to/cinnamon-product.jpg assets/product-cinnamon.jpg
```

#### **About Section Image**

```bash
# Use an artistic shot of tea cups or cinnamon sticks
cp /path/to/lifestyle-shot.jpg assets/about-cinnamon.jpg
```

**Recommendation:** Use one of your styled photos showing:
- Tea cups with the product
- Wooden table setting
- Natural, warm lighting

---

### Step 3: Add Heritage Section Images

These images tell your brand story. You can use:

1. **Stock photos** from free sources:
   - [Unsplash](https://unsplash.com) - Search: "ceylon tea", "cinnamon", "sri lanka"
   - [Pexels](https://pexels.com) - High-quality free images
   - [Pixabay](https://pixabay.com) - Free commercial use

2. **Suggested searches:**
   - `heritage-cinnamon.jpg` → "cinnamon plantation", "cinnamon harvest"
   - `heritage-tea.jpg` → "tea plantation sri lanka", "ceylon tea"
   - `heritage-sustainable.jpg` → "sustainable farming", "organic farming"
   - `heritage-craft.jpg` → "traditional craftsmanship", "artisan"

3. **Or use your own photos** of:
   - Your production process
   - Your team
   - Your facilities
   - Sri Lankan landscapes

---

### Step 4: Add Testimonial Photos

**Option 1: Use placeholder avatars** (temporary)
- Download generic avatars from [UI Faces](https://uifaces.co)
- Or use illustrated avatars from [Avataaars](https://getavataaars.com)

**Option 2: Use customer photos** (with permission)
- Ask customers for photos and permission
- Use professional headshots if available

```bash
cp /path/to/customer1.jpg assets/testimonial-1.jpg
cp /path/to/customer2.jpg assets/testimonial-2.jpg
cp /path/to/customer3.jpg assets/testimonial-3.jpg
```

**Specifications:**
- Square format (1:1 ratio)
- Minimum 300x300px
- Clear, professional photos

---

### Step 5: Update Contact Information

Open `index.html` and find the contact section. Update:

#### **Email Address**
```html
<!-- Line ~1350 approximately -->
<a href="mailto:YOUR-EMAIL@cinnamonhealth.lk">YOUR-EMAIL@cinnamonhealth.lk</a>
```

Replace with your actual email:
```html
<a href="mailto:info@cinnamonhealth.lk">info@cinnamonhealth.lk</a>
```

#### **Phone Number**
```html
<!-- Line ~1360 approximately -->
<a href="tel:+94XXXXXXXXX">+94 XX XXX XXXX</a>
```

Replace with your actual phone:
```html
<a href="tel:+94712345678">+94 71 234 5678</a>
```

#### **Address**
```html
<!-- Line ~1370 approximately -->
<p>Colombo, Sri Lanka</p>
```

Replace with your actual address:
```html
<p>123 Main Street, Colombo 03, Sri Lanka</p>
```

---

### Step 6: Add Social Media Links

Find all social media links in `index.html` (there are two sets - contact section and footer):

```html
<!-- Update these URLs (appears twice in the file) -->
<a href="https://facebook.com/cinnamonhealth" aria-label="Facebook">
<a href="https://instagram.com/cinnamonhealth" aria-label="Instagram">
<a href="https://linkedin.com/company/cinnamonhealth" aria-label="LinkedIn">
<a href="https://wa.me/94712345678" aria-label="WhatsApp">
```

**WhatsApp Link Format:**
- Use: `https://wa.me/94XXXXXXXXX` (no spaces, no +)
- Example: `https://wa.me/94712345678`

---

### Step 7: Test the Website

1. **Open in Browser:**
   ```bash
   open index.html
   # or double-click the file
   ```

2. **Test Checklist:**
   - ✅ Logo appears correctly
   - ✅ All product images load
   - ✅ Navigation works smoothly
   - ✅ Scroll animations trigger
   - ✅ Mobile menu works (resize browser)
   - ✅ Contact form submits (check console)
   - ✅ All links work

3. **Mobile Testing:**
   - Open Chrome DevTools (F12)
   - Click device toolbar icon
   - Test on various screen sizes
   - Try: iPhone SE, iPhone 12, iPad, Desktop

---

### Step 8: Optional Customizations

#### **Update Meta Description** (for SEO)

In `index.html`, find and update:

```html
<meta name="description" content="Your custom description here">
```

Example:
```html
<meta name="description" content="Cinnamon Health offers premium Ceylon cinnamon and natural tea infusions from Sri Lanka. 100% pure, sustainably sourced, export quality products.">
```

#### **Change Primary Color**

In `styles.css`, update the color variables:

```css
:root {
    --color-primary: #2d8659;  /* Change this */
    --color-secondary: #d4922f; /* And this */
}
```

#### **Add Google Analytics** (Optional)

Before the closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🌐 Going Live

### Option 1: Netlify (Easiest)

1. Go to [netlify.com](https://netlify.com)
2. Sign up for free
3. Drag and drop your `cinnamon-health` folder
4. Done! Your site is live

**Custom Domain:**
- In Netlify dashboard, go to Domain Settings
- Add your custom domain (e.g., cinnamonhealth.lk)
- Follow DNS configuration instructions

### Option 2: GitHub Pages (Free)

1. Create GitHub account
2. Create new repository: `cinnamon-health`
3. Upload all files
4. Go to Settings → Pages
5. Select main branch
6. Your site will be live at: `yourusername.github.io/cinnamon-health`

### Option 3: Traditional Web Hosting

1. Get hosting from:
   - SiteGround
   - Bluehost
   - HostGator
   - Local Sri Lankan host

2. Upload files via FTP:
   - Use FileZilla or similar
   - Upload all files to `public_html` or `www` folder

3. Configure domain:
   - Point your domain to hosting
   - Wait for DNS propagation (24-48 hours)

---

## 🔧 Troubleshooting

### Images Not Showing?

**Check:**
1. File names match exactly (case-sensitive)
2. Files are in `assets/` folder
3. File formats are correct (JPG or PNG)
4. No spaces in file names

### Form Not Working?

The form currently shows a success message (demo mode).

**To connect to a real backend:**
1. Use a form service like Formspree, Netlify Forms, or Google Forms
2. Or implement a backend API
3. Update the form handling code in `script.js`

**Quick Solution - Formspree:**
```html
<!-- In index.html, update the form tag: -->
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

### Animations Not Working?

**Check:**
1. JavaScript is enabled in browser
2. `script.js` file is properly linked
3. Console for any errors (F12 → Console)

### Mobile Menu Not Opening?

**Check:**
1. JavaScript is loaded
2. Browser console for errors
3. Try different browser

---

## 📞 Need Help?

If you encounter any issues:

1. **Check the browser console** (F12 → Console tab)
2. **Validate HTML:** [validator.w3.org](https://validator.w3.org)
3. **Test in different browsers:** Chrome, Firefox, Safari
4. **Check file paths:** Ensure all assets are in the right location

---

## ✅ Launch Checklist

Before going live, verify:

- [ ] Logo is added and displays correctly
- [ ] All product images are added
- [ ] Heritage section images are added
- [ ] Testimonial photos are added
- [ ] Contact email is updated
- [ ] Phone number is updated
- [ ] Address is updated
- [ ] All social media links are added
- [ ] Meta description is customized
- [ ] Website tested on mobile
- [ ] Website tested on desktop
- [ ] All links work correctly
- [ ] Form submission works
- [ ] Images are optimized (compressed)
- [ ] Domain is configured
- [ ] SSL certificate is active (HTTPS)
- [ ] Google Analytics added (optional)

---

## 🎉 You're Ready!

Your premium Cinnamon Health website is now ready to launch!

**Remember:**
- Keep images optimized (use tools like TinyPNG)
- Update content regularly
- Monitor contact form submissions
- Collect customer testimonials
- Track website analytics

---

**Questions?** Refer to the main README.md file or contact your developer.

**Good luck with your launch!** 🌿✨
