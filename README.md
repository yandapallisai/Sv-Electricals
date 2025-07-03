# PowerPro Electric - Professional Electrician Website

A modern, responsive website for an electrician business built with React. This website showcases professional electrical services and provides an excellent user experience for potential clients.

## 🚀 Features

### Design & User Experience
- **Modern & Professional Design**: Clean, trustworthy design with a professional color scheme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Fast Loading**: Optimized performance with efficient React components
- **Accessibility**: Built with accessibility best practices

### Key Sections
- **Hero Section**: Compelling headline with call-to-action buttons
- **About Us**: Company story, team, certifications, and statistics
- **Services**: Comprehensive service listings with detailed descriptions
- **Contact**: Contact form, business information, and Google Maps integration
- **Footer**: Company info, quick links, and social media

### Technical Features
- **React Components**: Modular, reusable components
- **FontAwesome Icons**: Professional iconography throughout
- **CSS Grid & Flexbox**: Modern layout techniques
- **Smooth Animations**: Subtle animations for enhanced UX
- **Form Handling**: Contact form with validation and submission feedback

## 🎨 Color Scheme

The website uses a professional color palette:
- **Primary Blue**: #1e3a8a (Trust and reliability)
- **Secondary Blue**: #3b82f6 (Professional and modern)
- **Accent Orange**: #f97316 (Energy and urgency for CTAs)
- **Light Gray**: #f8fafc (Clean backgrounds)
- **Dark Gray**: #374151 (Text and content)

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation and header
│   ├── Header.css
│   ├── HeroSection.js     # Hero section with CTA
│   ├── HeroSection.css
│   ├── AboutUs.js         # About us page
│   ├── AboutUs.css
│   ├── Services.js        # Services listing
│   ├── Services.css
│   ├── Contact.js         # Contact form and info
│   ├── Contact.css
│   ├── Footer.js          # Footer with links
│   └── Footer.css
├── App.js                 # Main app component
├── App.css               # Global styles
├── index.js              # App entry point
└── index.css             # Base styles
```

## 🎯 Customization Guide

### Updating Content

1. **Company Information**
   - Update company name, phone, email, and address in respective components
   - Modify business hours in `Contact.js` and `Footer.js`

2. **Services**
   - Edit services array in `Services.js`
   - Add/remove services as needed
   - Update service descriptions and benefits

3. **Team Members**
   - Modify team members array in `AboutUs.js`
   - Update photos, names, roles, and experience

4. **Images**
   - Replace placeholder images with actual company photos
   - Update image URLs in components

### Styling Changes

1. **Colors**
   - Modify CSS variables in `App.css` under `:root`
   - Update color scheme to match brand

2. **Typography**
   - Change font family in `App.css`
   - Adjust font sizes and weights as needed

3. **Layout**
   - Modify grid layouts and spacing in component CSS files
   - Adjust responsive breakpoints if needed

### Google Maps Integration

1. **Get Embed Code**
   - Go to Google Maps
   - Find your business location
   - Click "Share" → "Embed a map"
   - Copy the iframe code

2. **Update Contact Component**
   - Replace the iframe src in `Contact.js`
   - Update the title attribute

## 📧 Contact Form Setup

The contact form is currently set up for frontend display. To make it functional:

### Option 1: Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace the form action in `Contact.js`

### Option 2: Netlify Forms
1. Deploy to Netlify
2. Add `name` attributes to form fields
3. Netlify will automatically handle form submissions

### Option 3: Custom Backend
1. Set up a backend API
2. Update the form submission handler in `Contact.js`
3. Add proper error handling and validation

## 🚀 Deployment

### Netlify (Recommended)
1. Push code to GitHub
2. Connect repository to Netlify
3. Deploy automatically

### Vercel
1. Install Vercel CLI
2. Run `vercel` in project directory
3. Follow prompts

### Traditional Hosting
1. Run `npm run build`
2. Upload `build` folder to web server
3. Configure server for React routing

## 🔧 SEO Optimization

### Meta Tags
Update the `public/index.html` file with:
- Company name and description
- Keywords relevant to electrical services
- Open Graph tags for social sharing

### Content Optimization
- Include location-specific keywords
- Add service-specific content
- Optimize images with alt tags

### Performance
- Compress images
- Enable gzip compression
- Use a CDN for assets

## 📞 Support

For questions or customization help:
- Review the component files for detailed comments
- Check the CSS files for styling options
- Refer to React documentation for component modifications

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with React and Create React App
- Icons from FontAwesome
- Images from Unsplash (replace with actual company photos)
- Design inspiration from modern web standards

---

**Note**: This is a template website. Please customize all content, images, and contact information to match your actual business before deploying.
