# Ovid International Ltd - Landing Page

A modern, responsive landing page for Ovid International Ltd, a Kenyan-based technology company specializing in software development, 3D design, web/mobile development, and IT services.

## 🚀 Features

- **Modern Design**: Clean, futuristic design with glassmorphism effects
- **3D Animations**: Three.js powered 3D background with floating geometric shapes
- **Responsive**: Fully responsive design for all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Elements**: Custom cursor, hover effects, and scroll animations
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading with modern build tools

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: TailwindCSS with custom animations
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with @react-three/fiber and @react-three/drei
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: NPM

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ovid-international-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
src/
├── components/
│   ├── About.jsx           # About section with company info
│   ├── Contact.jsx         # Contact form and information
│   ├── CustomCursor.jsx    # Animated custom cursor
│   ├── Footer.jsx          # Footer with links and social media
│   ├── Hero.jsx           # Hero section with 3D background
│   ├── LoadingScreen.jsx   # Animated loading screen
│   ├── Navbar.jsx         # Navigation with smooth scrolling
│   ├── Portfolio.jsx      # Project showcase
│   ├── Services.jsx       # Services with animated cards
│   ├── ThreeBackground.jsx # 3D background component
│   └── WhyChooseUs.jsx    # Features and achievements
├── hooks/                 # Custom React hooks (if any)
├── utils/                 # Utility functions
├── App.jsx               # Main application component
├── main.jsx             # Application entry point
└── index.css           # Global styles and TailwindCSS
```

## 🎨 Design System

### Colors
- **Primary**: Deep Blue (#1D2D50)
- **Accent**: Electric Blue (#00B4D8)
- **Background**: White (#FFFFFF)
- **Text**: Dark Grey (#1B1B1B)

### Typography
- **Primary Font**: Inter
- **Secondary Font**: Poppins
- **Headings**: Bold, with gradient text effects
- **Body**: Clean, readable sans-serif

### Animations
- **Loading**: Smooth progress with rotating logo
- **Scroll**: Parallax and reveal animations
- **Hover**: 3D transforms and color transitions
- **Page Transitions**: Smooth fade-ins and slide effects

## 📱 Sections

1. **Hero**: Full-screen intro with 3D background, company tagline, and CTA
2. **About**: Company information, mission, vision, and statistics
3. **Services**: Four main service offerings with animated cards
4. **Why Choose Us**: Key features and achievements
5. **Portfolio**: Project showcase with filtering
6. **Contact**: Contact form and company information
7. **Footer**: Links, social media, and newsletter signup

## 🚀 Deployment

This project can be deployed to various platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with automatic builds

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload contents of `dist` folder to your web server

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your primary colors
  },
  accent: {
    // Your accent colors
  }
}
```

### Content
- Update company information in individual components
- Replace placeholder images with actual project images
- Modify contact information in `Contact.jsx`
- Update social media links in `Footer.jsx`

### 3D Elements
Customize the 3D background in `ThreeBackground.jsx`:
- Adjust particle count and behavior
- Modify floating shapes
- Change lighting and materials

## 📧 Contact Information

- **Website**: [www.ovidinternational.co.ke](https://www.ovidinternational.co.ke)
- **Email**: info@ovidinternational.co.ke
- **Phone**: +254 700 123 456
- **Location**: Nairobi, Kenya

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

Built with ❤️ by Ovid International Ltd - Empowering Africa Through Technology 