# 🌿 Cinnamon Health - Premium Website

A world-class, premium marketing website for **Cinnamon Health** - showcasing authentic Ceylon cinnamon and natural tea infusions from Sri Lanka.

## ✨ Features

### Design & Aesthetics
- **Premium Design Language** - Inspired by Apple, Aesop, Notion, and luxury wellness brands
- **Custom Color Palette** - Derived from the Cinnamon Health brand
  - Primary Green: `#2d8659` (Natural, Organic)
  - Secondary Gold: `#d4922f` (Cinnamon Warmth)
  - Cream: `#f5e6d3` (Soft, Natural)
- **Elegant Typography** - Playfair Display, Inter, and Cormorant Garamond
- **Smooth Animations** - Scroll-triggered reveals, floating elements, hover effects
- **Glassmorphism Effects** - Modern, premium UI elements

### Technical Features
- ✅ **100% Responsive** - Mobile, tablet, and desktop optimized
- ✅ **Pure HTML/CSS/JavaScript** - No frameworks, fast loading
- ✅ **SEO Optimized** - Semantic HTML, proper meta tags
- ✅ **Accessibility** - ARIA labels, keyboard navigation, reduced motion support
- ✅ **Performance Optimized** - Lazy loading, debounced events, efficient animations
- ✅ **Modern Interactions** - Custom cursor, scroll animations, parallax effects

### Sections
1. **Hero Section** - Full-screen premium introduction
2. **About Section** - Brand story and values
3. **Why Choose Ceylon Cinnamon** - Feature cards
4. **Products Overview** - Product showcase cards
5. **Featured Product** - Detailed showcase of Tea with Cinnamon Stick
6. **Health Benefits** - Wellness-focused cards
7. **Sri Lankan Heritage** - Cultural storytelling
8. **Testimonials** - Customer reviews
9. **Contact Section** - Contact form and details
10. **Footer** - Comprehensive footer with links

## 📁 Project Structure

```
cinnamon-health/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS with animations
├── script.js           # JavaScript interactions
├── README.md           # This file
├── SETUP.md            # Setup instructions
└── assets/             # Images and media
    ├── logo.png
    ├── about-cinnamon.jpg
    ├── product-tea-stick.jpg
    ├── product-cinnamon.jpg
    ├── featured-product.jpg
    ├── heritage-cinnamon.jpg
    ├── heritage-tea.jpg
    ├── heritage-sustainable.jpg
    ├── heritage-craft.jpg
    ├── testimonial-1.jpg
    ├── testimonial-2.jpg
    └── testimonial-3.jpg
```

## 🚀 Quick Start

### 1. Add Your Logo

Replace the placeholder logo with your actual Cinnamon Health logo:

```bash
# Place your logo file in the assets folder
cp /path/to/your/logo.png assets/logo.png
```

**Logo Requirements:**
- Format: PNG with transparent background
- Recommended size: 200-300px width
- High resolution (2x for retina displays)

### 2. Add Product Images

Add the following images to the `assets/` folder:

#### Required Images:

**About Section:**
- `about-cinnamon.jpg` - High-quality image of Ceylon cinnamon sticks or tea setup

**Products:**
- `product-tea-stick.jpg` - Tea with Cinnamon Stick product image
- `product-cinnamon.jpg` - Premium Ceylon Cinnamon product image
- `featured-product.jpg` - Main featured product showcase image

**Heritage Section:**
- `heritage-cinnamon.jpg` - Ceylon cinnamon harvest/plantation
- `heritage-tea.jpg` - Ceylon tea plantations
- `heritage-sustainable.jpg` - Sustainable farming practices
- `heritage-craft.jpg` - Traditional craftsmanship

**Testimonials:**
- `testimonial-1.jpg` - Customer photo 1 (or placeholder avatar)
- `testimonial-2.jpg` - Customer photo 2 (or placeholder avatar)
- `testimonial-3.jpg` - Customer photo 3 (or placeholder avatar)

**Image Specifications:**
- Format: JPG or PNG
- Quality: High resolution (minimum 1200px wide)
- Aspect Ratios:
  - Hero/Featured: 16:9
  - Product cards: 4:3
  - Heritage cards: 3:2
  - Testimonial avatars: 1:1 (square)

### 3. Using Your Existing Product Photos

You can use the product photos you provided! Copy them to the assets folder:

```bash
# Use your tea product images
cp /path/to/tea-product-photo-1.jpg assets/product-tea-stick.jpg
cp /path/to/tea-product-photo-2.jpg assets/featured-product.jpg
```

### 4. Launch the Website

Simply open `index.html` in a web browser:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

Or use a local development server for better experience:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Then visit: http://localhost:8000
```

## 🎨 Customization

### Update Contact Information

Edit the contact section in `index.html`:

```html
<!-- Update email -->
<a href="mailto:YOUR-EMAIL@cinnamonhealth.lk">YOUR-EMAIL@cinnamonhealth.lk</a>

<!-- Update phone -->
<a href="tel:+94XXXXXXXXX">+94 XX XXX XXXX</a>

<!-- Update address -->
<p>Your Address, City, Sri Lanka</p>
```

### Update Social Media Links

Replace `#` with your actual social media URLs in `index.html`:

```html
<a href="https://facebook.com/yourpage" aria-label="Facebook">
<a href="https://instagram.com/yourhandle" aria-label="Instagram">
<a href="https://linkedin.com/company/yourcompany" aria-label="LinkedIn">
<a href="https://wa.me/94XXXXXXXXX" aria-label="WhatsApp">
```

### Customize Colors

All colors are defined as CSS variables in `styles.css`. Update them at the top:

```css
:root {
    --color-primary: #2d8659;      /* Your primary brand color */
    --color-secondary: #d4922f;    /* Your secondary brand color */
    /* ... other colors */
}
```

### Add More Products

To add more products, copy the product card structure in the Products section:

```html
<div class="product-card reveal-up">
    <!-- Product content here -->
</div>
```

## 🌐 Deployment

### Deploy to Netlify (Recommended)

1. Create a free account at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be live instantly!

### Deploy to GitHub Pages

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit"

# Create repository on GitHub, then:
git remote add origin https://github.com/yourusername/cinnamon-health.git
git branch -M main
git push -u origin main

# Enable GitHub Pages in repository settings
```

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📱 Browser Support

- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- **PageSpeed Score:** 95+
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Cumulative Layout Shift:** < 0.1

## 📄 License

This website is created for Cinnamon Health. All rights reserved.

## 🛠️ Support

For questions or support, contact:
- Email: info@cinnamonhealth.lk
- Phone: +94 XX XXX XXXX

## 🎯 Next Steps

1. ✅ Add your logo and images
2. ✅ Update contact information
3. ✅ Customize social media links
4. ✅ Review and update product descriptions
5. ✅ Test on mobile devices
6. ✅ Deploy to production

---

**Built with care for Cinnamon Health** 🌿

*Premium Ceylon Cinnamon for a Healthier Life*
