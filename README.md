# 🌍 Global Trades Interactive Section

A smooth, sophisticated, interactive web section featuring a 3D Earth globe with advanced scroll animations, parallax effects, and dynamic trade notifications. Built as a senior-level frontend challenge showcasing modern web development techniques.

## 🚀 Features

### ✨ Core Features
- **Animated Title & Description** - Smooth text animations with blurring effects
- **Interactive Custom 3D Earth Globe** - Built a Custom Cobe package, featuring realistic Earth visualization and Custom Layers
- **Trade Counter Animation** - Dynamic count-up animation displaying total trades
- **Horizontal Testimonials Marquee** - Smooth scrolling testimonials behind the globe
- **Advanced Parallax Scroll Effects** - Multi-layered scroll interactions across sections
- **Starfield Background** - Dynamic animated star field using react-particles
- **Seamless Section Transitions** - Smooth fade and rise animations between sections

### 🌟 Bonus Features
- **Mock Trade Generator** - Dynamically generates realistic trade notifications
- **Interactive Trade Markers** - Clickable trade notifications positioned on globe
- **Globe Rotation** - Globe automatically rotates to center on selected trade locations
- **Trade Notifications** - Animated trade alerts appearing on the globe

## 🛠 Tech Stack

- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS
- **Animations**: Motion (Framer Motion)
- **3D Globe**: Cobe
- **Carousel**: Embla Carousel
- **Particles**: TSParticles
- **Icons**: Lucide React
- **UI Kit**: Radix UI primitives
- **Package Manager**: npm

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/AlirezaValipourm/technance-pulse-front.git
   cd technance-pulse-front
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000` to view the application.

### Build for Production

```bash
npm run build
# or
yarn build
```

## 🎮 Usage Instructions

### Viewing the Experience
1. **Scroll through the section** to trigger various animations
2. **Observe the title animations** as they fade in with blur effects
3. **Watch the globe** as it moves diagonally during scroll (parallax effect)
4. **Notice testimonials** scrolling horizontally behind the globe
5. **Continue scrolling** to see the starfield section fade in
6. **Click on trade notifications** to rotate the globe to their locations

### Interactive Elements
- **Trade Notifications**: Click on any trade notification to center the globe on that location
- **Scroll-based Animations**: All major animations are triggered by scroll position

## 🏗 Project Structure

```
technance-pulse/
├── public/ # Static Assets
├── src/
│ ├── app/ # Next.js App Router
│ │ ├── page.tsx # Home page
│ │ ├── layout.tsx # Root layout
│ │ └── _resource/
│ │ │  ├── page/
│ │ │  │ ├── TradingStepsSection/
│ │ │  │ └── IntroductionSection/
│ │ │  └── layout/
│ │ │  └── Footer/
│ │
│ ├── components/ # Reusable Components
│ │ ├── Animations/
│ │ │ ├── AnimatedCounter/
│ │ │ └── TextReveal/
│ │ ├── Globe3D/
│ │ ├── StarField/
│ │ ├── TradingStep/
│ │ ├── Testimonial/
│ │ ├── TradeList.tsx/
│ │ ├── EmblaCarousel/
│ │ ├── FAQItem/
│ │ ├── Typography/
│ │ ├── Icons/
│ │ └── uiKit/ # UI Components
│ │ └── components/ui/
│ │ ├── button.tsx
│ │ ├── badge.tsx
│ │ ├── card.tsx
│ │ ├── accordion.tsx
│ │ └── input.tsx
│ │
│ └── core/ # Core Logic & Config
│ ├── declarations/ # Types & Constants
│ ├── styles/ # Global Styles
│ ├── utils/ # Utility Functions
│ ├── hooks/ # Custom Hooks
│ ├── services/ # API Services
│ └── libs/ # External Libraries Config
│
├── package.json
├── next.config.ts
└── tsconfig.json
```

## 🎨 Key Components

### EarthGlobe Component
- Implements the Cobe 3D Earth visualization
- Handles rotation animations and trade marker positioning
- Manages click interactions for trade centering

### TestimonialsMarquee Component
- Creates smooth horizontal scrolling testimonials
- Implements infinite scroll with seamless looping
- Positioned behind the globe with proper z-indexing

### TradeNotifications Component
- Generates mock trade data dynamically
- Positions notifications on the globe
- Handles click events for globe rotation

### StarField Component
- Creates animated star background using HTML5 Canvas
- Implements particle system for dynamic star movement
- Optimized for smooth 60fps animations

## 🎯 Animation Details

### Scroll-Triggered Animations
- **Title/Description**: Fade in with blur effect using Motion
- **Globe Movement**: Diagonal parallax movement based on scroll position
- **Section Transitions**: Smooth opacity and transform transitions
- **Trade Counter**: Incremental count-up animation

## 📱 Responsive Design

The section is fully responsive and optimized for:
- Desktop (1280px+)
- Laptop (1024px - 1280px)
- Tablet (768px - 1024px)
- Mobile (320px - 640px)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy on Vercel

## 🐛 Troubleshooting

### Common Issues

**Globe not rendering:**
- Ensure WebGL is supported in your browser
- Check console for Cobe-related errors

**Animations not smooth:**
- Verify hardware acceleration is enabled
- Reduce animation complexity on lower-end devices

**Build errors:**
- Clear node_modules and reinstall dependencies
- Ensure Node.js version compatibility

## 🙏 Acknowledgments

- [Cobe](https://cobe.vercel.app/) for the amazing 3D globe library
- [Motion](https://motion.dev/) for smooth React animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling

**Built with ❤️ for the Senior Frontend Developer Challenge**