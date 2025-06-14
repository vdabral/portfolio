# Vaibhav Dabral - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my skills as a Full Stack Developer specializing in the MERN stack.

## 🚀 Features

- **Modern Design**: Clean, professional interface with glassmorphism effects
- **Responsive Layout**: Optimized for all device sizes
- **Dark/Light Theme**: Toggle between dark and light modes
- **Smooth Animations**: Powered by Framer Motion for enhanced user experience
- **Interactive Elements**: Hover effects, smooth scrolling, and animated components
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Filterable project gallery with detailed modals
- **Skills Section**: Animated progress bars and categorized skills
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### UI/UX
- **Lucide React** - Beautiful icons
- **Custom Components** - Reusable UI components
- **Responsive Design** - Mobile-first approach
- **Accessibility** - ARIA labels and semantic HTML

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Git** - Version control

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header with theme toggle
│   │   └── Footer.tsx      # Footer component
│   ├── sections/
│   │   ├── Hero.tsx        # Landing section with animated background
│   │   ├── About.tsx       # About me section
│   │   ├── Skills.tsx      # Skills showcase with filters
│   │   ├── Projects.tsx    # Project gallery with modals
│   │   └── Contact.tsx     # Contact form and information
│   └── ui/
│       ├── AnimatedBackground.tsx  # Particle animation background
│       ├── Button.tsx      # Reusable button component
│       ├── Card.tsx        # Card component with hover effects
│       └── Section.tsx     # Section wrapper component
├── context/
│   └── ThemeContext.tsx    # Theme management context
├── data/
│   ├── skills.ts          # Skills data configuration
│   └── projects.ts        # Projects data configuration
└── styles/
    └── index.css          # Global styles and Tailwind imports
```

## 🎨 Key Sections

### Hero Section
- Animated background with floating particles
- Typing animation with role descriptions
- Profile image with glassmorphism effects
- Call-to-action buttons

### About Section
- Professional background and journey
- Experience timeline
- Skills tags and expertise areas
- Download resume functionality

### Skills Section
- Categorized skill filters (Frontend, Backend, Tools)
- Animated progress bars
- Hover effects and smooth transitions
- MERN stack focus

### Projects Section
- Filterable project gallery
- Project detail modals
- Live demo and source code links
- Technology stack tags

### Contact Section
- Functional contact form with validation
- Contact information cards
- Availability status
- Social media links

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vaibhavdabral/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: Full-featured layout with animations
- **Tablet**: Adapted layout with touch-friendly interactions
- **Mobile**: Optimized mobile experience with simplified navigation

## 🎯 Performance Features

- **Lazy Loading**: Images and components load on demand
- **Optimized Bundle**: Tree-shaking and code splitting
- **Fast Loading**: Vite's optimized development and build process
- **Smooth Animations**: 60fps animations with Framer Motion

## 🔧 Customization

### Theme Configuration
Edit `src/context/ThemeContext.tsx` to customize theme colors and styles.

### Content Updates
- **Skills**: Update `src/data/skills.ts`
- **Projects**: Update `src/data/projects.ts`
- **Personal Info**: Update individual section components

### Styling
The project uses Tailwind CSS for styling. Customize the design system in `tailwind.config.js`.

## 📞 Contact

**Vaibhav Dabral**
- Email: vaibhavdabral@gmail.com
- Phone: +91 98765 43210
- Location: Delhi, India
- GitHub: [@vaibhavdabral](https://github.com/vaibhavdabral)
- LinkedIn: [@vaibhavdabral](https://linkedin.com/in/vaibhavdabral)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

---

**⭐ If you found this portfolio helpful, please consider giving it a star!**
