# Deployment Guide

This document provides step-by-step instructions for deploying the Vaibhav Dabral Portfolio website.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy with one click
5. Vercel will automatically detect Vite and use the correct build settings

### Option 2: Netlify
1. Build the project: `npm run build`
2. Visit [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder to Netlify
4. Or connect your GitHub repository for automatic deployments

### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://vdabral.github.io/portfolio",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 🔧 Build Process

### Production Build
```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Build Locally
```bash
npm run preview
```

### Check for TypeScript Errors
```bash
npm run type-check
```

### Lint and Fix Code
```bash
npm run lint:fix
```

## 📊 Build Analysis

To analyze bundle size:
```bash
npm run build:analyze
```

## 🌐 Environment Variables

For production deployment, you may want to set:

```env
VITE_APP_TITLE="Vaibhav Dabral - Portfolio"
VITE_APP_DESCRIPTION="Full Stack Developer specializing in MERN stack"
VITE_CONTACT_EMAIL="vaibhavdabral@gmail.com"
```

## 📝 Pre-deployment Checklist

- [ ] Update personal information in all components
- [ ] Add your own project images to `/public` folder
- [ ] Update social media links in Hero and Contact sections
- [ ] Test contact form functionality
- [ ] Verify all external links work
- [ ] Check responsive design on different devices
- [ ] Optimize images for web
- [ ] Test dark/light theme toggle
- [ ] Verify smooth scrolling and animations
- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview`

## 🔒 Domain and SSL

Most hosting platforms provide:
- Free SSL certificates
- Custom domain support
- CDN for faster loading

## 📈 Performance Tips

- Images are already optimized for web
- Lazy loading is implemented for sections
- Code splitting with React.lazy()
- Smooth animations with Framer Motion
- Responsive images and modern formats

## 🎯 SEO Optimization

The portfolio includes:
- Meta tags for SEO
- Open Graph tags for social sharing
- Twitter Card tags
- Semantic HTML structure
- Accessibility features
- Fast loading times

## 📞 Support

If you need help with deployment:
- Check the hosting platform's documentation
- Ensure all dependencies are in package.json
- Verify build scripts work locally first
- Check for console errors in production

---

**Happy Deploying! 🚀**
