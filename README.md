# GainEdge Landing Page

Public landing page for GainEdge - Tennis Training & Tracking App.

## Features

- **Hero Section** - Eye-catching intro with app branding and download links
- **Features Section** - Showcase Drills, Rally, Points, Conditioning, Player Management, Sports Categories
- **How It Works** - 3-step guide for new users
- **App Preview** - Phone mockup with app interface
- **Pricing Section** - Subscription information with Razorpay integration
- **Fully Responsive** - Works on desktop, tablet, and mobile

## File Structure

```
gainedge-landing/
├── index.html          # Main landing page
├── terms.html          # Terms & Conditions page
├── privacy.html        # Privacy Policy page
├── assets/
│   ├── css/
│   │   └── styles.css  # All styling
│   ├── js/
│   │   └── main.js     # JavaScript functionality
│   └── images/
│       ├── logo.svg    # App logo (placeholder - replace with your logo)
│       └── logo.png    # App logo (PNG version - replace with your logo)
└── README.md           # This file
```

## Setup Instructions for GitHub Pages

### Step 1: Upload Files to GitHub

1. Create a new repository on GitHub (or use existing)
2. Upload all files from this folder to your repository
3. Alternatively, clone the repo and copy files:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
# Copy all files to the repo
git add .
git commit -m "Add GainEdge landing page"
git push
```

### Step 2: Enable GitHub Pages

1. Go to your repository **Settings**
2. Scroll down to **Pages** section
3. Under **Source**, select **Deploy from a branch**
4. Select **main** branch
5. Select **/ (root)** folder
6. Click **Save**

### Step 3: Wait for Deployment

- GitHub will deploy your site (usually takes 1-2 minutes)
- Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Customization

### Replace Logo

1. Replace `assets/images/logo.svg` and `assets/images/logo.png` with your actual app logo
2. Keep file names the same or update references in HTML files

### Update App Store Links

Edit these links in `index.html`:
- Android: `https://play.google.com/store/apps/details?id=com.gainedgeapp`
- iOS: `https://apps.apple.com/us/app/gainedge-tennis-train-track/id6759570500`

### Update Contact Email

Search and replace `gainedge.app@gmail.com` with your actual support email.

### Update Pricing/Razorpay

In `assets/js/main.js`, update the Razorpay key:
```javascript
key: 'rzp_live_YOUR_KEY_HERE'
```

### Change Hero Background

In `assets/css/styles.css`, update the hero section background:
```css
.hero {
  background: url('YOUR_IMAGE_URL') center/cover no-repeat;
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- FontAwesome 6 (CDN)
- Google Fonts (System fonts fallback)

## License

Copyright © 2026 GainEdge. All rights reserved.

---

**Need Help?**

For issues or questions, contact: gainedge.app@gmail.com
