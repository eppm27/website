# Ei Phyu Phyu Mon - Portfolio Website

A modern, responsive portfolio website showcasing full-stack development skills, projects, and experience in FinTech, AI integration, and biomedical technology.

## 🚀 Live Demo

Visit the live website: [Your Domain Here]

## 📋 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Dark Theme**: Optimized dark theme with elegant gradients and lighting effects
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Components**: Smooth scrolling navigation and hover effects
- **Skills Showcase**: Comprehensive display of technical skills with authentic brand icons
- **Project Portfolio**: Horizontal scrolling project cards with detailed descriptions
- **Contact Integration**: Direct email and phone contact options
- **Performance Optimized**: Fast loading with Vite build system

## 🛠️ Tech Stack

### Frontend

- **React 19.1.0** - Modern React with latest features
- **Vite 6.3.5** - Lightning-fast build tool and dev server
- **Tailwind CSS 4.1.6** - Utility-first CSS framework
- **DaisyUI 5.1.14** - Component library for Tailwind CSS

### Development Tools

- **ESLint** - Code linting and quality assurance
- **React Scroll** - Smooth scrolling navigation
- **Custom SVG Icons** - Authentic brand representations

### Skills Highlighted

- **Frontend**: React.js, Next.js, JavaScript/TypeScript, Tailwind CSS, Figma
- **Backend**: Node.js, Python (FastAPI, Django, Flask), RESTful APIs
- **Databases**: PostgreSQL, MySQL, MongoDB, Django ORM, SQLAlchemy
- **DevOps**: Docker, Git/GitHub, CI/CD, Agile Development, Postman
- **Focus Areas**: FinTech, AI Integration, Data-Driven Applications, Biomedical Tech

## 🏗️ Project Structure

```text
my-portfolio/
├── public/
│   ├── svg/                    # Authentic brand SVG icons
│   │   ├── js.svg
│   │   ├── python.svg
│   │   ├── node-js.svg
│   │   ├── postgresql.svg
│   │   ├── mongodb.svg
│   │   ├── api.svg
│   │   ├── postman.svg
│   │   ├── restful-api.svg
│   │   └── architecture.svg
│   ├── projects/               # Project screenshots
│   └── [other assets]
├── src/
│   ├── components/
│   │   ├── About.jsx          # About section
│   │   ├── Contact.jsx        # Contact form and info
│   │   ├── Experience.jsx     # Work experience
│   │   ├── Footer.jsx         # Site footer
│   │   ├── Home.jsx           # Hero section
│   │   ├── Navbar.jsx         # Navigation component
│   │   ├── Projects.jsx       # Project showcase
│   │   ├── Skills.jsx         # Technical skills display
│   │   └── TechBadge.jsx      # Reusable tech badge
│   ├── context/
│   │   └── ThemeContext.jsx   # Theme management
│   ├── App.jsx                # Main app component
│   ├── index.css              # Global styles
│   └── main.jsx              # App entry point
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/eppm27/website.git
cd website/my-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New SVG Icons

1. Add your SVG file to `public/svg/`
2. Update the corresponding component in `src/components/Skills.jsx`
3. Use the pattern: `<img src="/svg/your-icon.svg" alt="Icon Name" className="w-8 h-8" />`

### Updating Projects

1. Add project images to `public/projects/`
2. Update the projects array in `src/components/Projects.jsx`

### Theme Customization

- Colors and styling can be customized in `src/index.css`
- Component-specific styles use Tailwind CSS classes
- Dark theme is permanent and optimized for professional presentation

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1280px+

## 🔧 Performance Features

- **Vite HMR**: Fast hot module replacement during development
- **Code Splitting**: Automatic code splitting for optimal loading
- **Asset Optimization**: Optimized images and icons
- **CSS Purging**: Unused CSS automatically removed in production

## 📞 Contact Information

- **Email**: eppmon27@gmail.com
- **Phone**: 0422095774
- **GitHub**: [eppm27](https://github.com/eppm27)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Icons from official brand resources
- Design inspiration from modern portfolio trends
- Built with modern web technologies for optimal performance
