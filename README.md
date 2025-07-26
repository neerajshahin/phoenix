# Phoenix Cabs - Eleventy Website

This is the Phoenix Cabs website converted to use Eleventy (11ty) as a static site generator.

## Features

✅ **Converted from static HTML to Eleventy templates**
- Clean, maintainable Nunjucks templates
- Reusable layouts with header and footer components
- SEO-friendly URLs with trailing slashes

✅ **Modern Development Workflow**
- Hot reload development server
- Asset optimization and copying
- Modular template structure

✅ **Responsive Design**
- Bootstrap-based responsive layout
- Mobile-friendly navigation
- Touch-friendly interface

## Project Structure

```
├── src/                    # Source templates and content
│   ├── _includes/         # Reusable components
│   │   ├── header.njk     # Site header with navigation
│   │   └── footer.njk     # Site footer
│   ├── _layouts/          # Page layouts
│   │   └── base.njk       # Base HTML layout
│   ├── index.njk          # Homepage
│   ├── about.njk          # About page
│   ├── contact.njk        # Contact page
│   ├── services.njk       # Services overview
│   └── [destinations].njk # Various destination pages
├── assets/                # Static assets (CSS, JS, images)
├── _site/                 # Generated site (auto-created)
├── .eleventy.js          # Eleventy configuration
└── package.json          # Dependencies and scripts
```

## Available Pages

### Main Pages
- **Homepage** (`/`) - Welcome page with hero section and service highlights
- **About** (`/about/`) - Company information and testimonials
- **Contact** (`/contact/`) - Contact form and location details
- **Services** (`/services/`) - Complete services overview

### Destination Pages
- **Char Dham Yatra** (`/char-dham/`) - Pilgrimage services
- **Delhi** (`/delhi/`) - Dehradun to Delhi
- **Airport** (`/airport/`) - Jolly Grant Airport transfers
- **Mussoorie** (`/mussorie/`) - Hill station tours
- **Haridwar** (`/haridwar/`) - Spiritual city visits
- **Rishikesh** (`/rishikesh/`) - Yoga capital tours
- And many more destination pages...

## Development

### Prerequisites
- Node.js (v14 or higher)
- npm

### Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```
   The site will be available at `http://localhost:8080`

3. Build for production:
   ```bash
   npm run build
   ```
   Generated files will be in the `_site/` directory

### Available Commands
- `npm start` - Start development server with hot reload
- `npm run serve` - Start development server
- `npm run build` - Build production site

## Template System

### Layouts
- **base.njk** - Main layout with HTML structure, head, and scripts
- Includes header and footer components automatically
- Supports custom CSS and JS injection per page

### Components
- **header.njk** - Navigation header with active page highlighting
- **footer.njk** - Site footer with links and contact information

### Front Matter
Each page template includes front matter for configuration:
```yaml
---
layout: base.njk
title: Page Title
bodyClass: page-specific-class
---
```

## Features Implemented

### ✅ Responsive Design
- Mobile-first Bootstrap layout
- Touch-friendly navigation
- Responsive images and cards

### ✅ SEO Optimized
- Clean URL structure (`/services/`, `/about/`)
- Proper meta tags and titles
- Semantic HTML structure

### ✅ Performance
- Asset optimization
- Clean generated HTML
- Fast static site generation

### ✅ Maintainability
- DRY (Don't Repeat Yourself) templates
- Reusable components
- Centralized configuration

## Contact Information

- **Phone**: [+91 79834 38214](tel:+917983438214)
- **Email**: [rajatshah06@gmail.com](mailto:rajatshah06@gmail.com)
- **WhatsApp**: [+91 79834 38214](https://wa.me/+917983438214)
- **Address**: Phoenix Cabs, River Heaven Colony, Jhajra, Dehradun - 248007, Uttarakhand

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Setup Steps:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy Phoenix Cabs website"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The site will automatically deploy on every push to the `main` branch
   
   ⚠️ **Important**: Make sure you select "GitHub Actions" as the source, NOT "Deploy from a branch". This tells GitHub to use our custom workflow instead of Jekyll.

3. **Access Your Site:**
   - Your site will be available at: `https://[username].github.io/[repository-name]/`
   - Example: `https://neerajkumar.github.io/phoenix/`

#### Custom Domain (Optional):
If you have a custom domain:
1. Update the `cname:` line in `.github/workflows/deploy.yml`
2. Add a CNAME record in your domain's DNS settings

### Manual Deployment

If you prefer manual deployment:

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Deploy the `_site` folder:**
   - Go to GitHub repository **Settings** → **Pages**
   - Select **Deploy from a branch**
   - Choose **gh-pages** branch and **/ (root)** folder
   - Push the contents of `_site/` to the `gh-pages` branch

### GitHub Actions Workflow

The deployment is handled by `.github/workflows/deploy.yml` which:
- Triggers on every push to `main` branch
- Installs Node.js and dependencies
- Builds the Eleventy site
- Deploys to GitHub Pages automatically

## Technology Stack

- **Static Site Generator**: Eleventy (11ty)
- **Template Engine**: Nunjucks
- **CSS Framework**: Bootstrap 5
- **Icons**: Bootstrap Icons, FontAwesome
- **Animations**: AOS (Animate On Scroll)
- **Form Handling**: EmailJS
- **Image Slider**: Swiper.js
- **Deployment**: GitHub Pages with GitHub Actions