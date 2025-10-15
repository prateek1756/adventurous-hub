# Welcome to my Project Adventurous Hub


Adventurous Hub is a comprehensive web application designed to provide users with an immersive experience for exploring and booking adventure tourism and resort accommodations in the Dandeli region.<create_file>
<path>README.md</path>
<content>
# 🌟 Adventurous Hub

> A premium adventure tourism and resort booking platform for Dandeli, Karnataka

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-blue.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.12.16-purple.svg)](https://www.framer.com/motion/)

Visit the live website here: [https://adventurous-hub.vercel.app/](https://adventurous-hub.vercel.app/)

Adventurous Hub is a modern, responsive web application that showcases the breathtaking beauty of Dandeli Wildlife Sanctuary and surrounding areas. Built with cutting-edge technologies, it provides an immersive experience for adventure enthusiasts looking to book accommodations, activities, and explore nearby attractions.

## ✨ Key Features

### 🏨 Accommodation Management
- **Diverse Room Types**: From cozy cottages to luxury suites
- **Detailed Amenities**: WiFi, coffee makers, premium bedding, and more
- **Real-time Availability**: Check room availability with our interactive calendar
- **Pricing Transparency**: Clear pricing with no hidden fees

### 🏃‍♂️ Adventure Activities
- **River Rafting**: Thrilling white-water rafting on the Kali River
- **Jungle Safaris**: Guided wildlife tours through Dandeli Wildlife Sanctuary
- **Trekking**: Scenic mountain trails with experienced guides
- **Kayaking & Boating**: Water sports on pristine lakes and rivers

### 📍 Nearby Attractions
- **Syntheri Rock**: Monolithic rock formation carved by nature
- **Kavala Caves**: Ancient limestone caves with stunning formations
- **Ulavi Temple**: Sacred shrine amidst natural beauty
- **Supa Dam**: Majestic dam with panoramic views

### 💳 Seamless Booking System
- **Smart Search**: Filter by dates, guests, and preferences
- **Secure Payments**: Integrated payment gateway with multiple options
- **Instant Confirmation**: Real-time booking confirmation with email/SMS alerts
- **Flexible Cancellation**: Hassle-free cancellation policies

### 🎨 Modern UI/UX
- **Dark/Light Theme**: Automatic theme switching based on user preference
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging micro-interactions and page transitions
- **Accessibility**: WCAG compliant with keyboard navigation support

## 🛠️ Technology Stack

### Frontend Framework
- **React 18** - Modern React with concurrent features
- **TypeScript** - Type-safe development experience
- **Vite** - Lightning-fast build tool and dev server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Lucide React** - Consistent icon system

### State Management & Forms
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation
- **React Router** - Declarative routing for React

### Animations & Interactions
- **Framer Motion** - Production-ready motion library
- **React Spring** - Physics-based animation library

### Development Tools
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Husky** - Git hooks for quality assurance

## 📁 Project Structure

```
adventurous-hub/
├── public/                    # Static assets
│   ├── img-upload/           # Uploaded images
│   └── favicon.ico
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── booking/         # Booking-specific components
│   │   ├── ui/              # Base UI components (shadcn/ui)
│   │   ├── ActivityCard.tsx  # Activity display card
│   │   ├── ChatBot.tsx      # Interactive chatbot
│   │   ├── Footer.tsx       # Site footer
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── NearbyAttractions.tsx
│   │   ├── PromotionBanner.tsx
│   │   ├── RoomCard.tsx     # Room display card
│   │   ├── SearchForm.tsx   # Search and filter form
│   │   └── ThemeToggle.tsx  # Theme switcher
│   ├── hooks/               # Custom React hooks
│   │   ├── use-scroll-animation.ts
│   │   └── use-toast.ts
│   ├── pages/               # Page components
│   │   ├── About.tsx        # About page
│   │   ├── Accommodation.tsx # Accommodation listings
│   │   ├── Activities.tsx   # Activities page
│   │   ├── Booking.tsx      # Booking form and process
│   │   ├── BookingSuccess.tsx # Success confirmation
│   │   ├── Contact.tsx      # Contact form and info
│   │   └── Index.tsx        # Homepage
│   ├── utils/               # Utility functions
│   │   ├── email-service.ts # Email/SMS services
│   │   ├── formatting.ts    # Data formatting utilities
│   │   └── validation-schemas.ts # Zod schemas
│   ├── App.tsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.tsx            # App entry point
├── package.json             # Dependencies and scripts
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/adventurous-hub.git
   cd adventurous-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup** (if needed)
   ```bash
   # Copy environment template
   cp .env.example .env.local

   # Edit .env.local with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format code with Prettier

# Type checking
npm run type-check   # Run TypeScript type checking
```

## 🎯 Usage Guide

### For Visitors
1. **Browse Activities**: Explore available adventure activities and accommodations
2. **Check Availability**: Use the search form to find available dates
3. **Make a Booking**: Fill out the booking form with your details
4. **Secure Payment**: Complete payment through our secure gateway
5. **Receive Confirmation**: Get instant confirmation via email and SMS

### For Developers
1. **Component Development**: Follow the established patterns in `src/components/`
2. **Styling**: Use Tailwind classes and theme variables
3. **State Management**: Utilize React hooks for local state
4. **Form Validation**: Implement Zod schemas for type-safe validation

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3001/api

# Payment Gateway
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Email Service
VITE_EMAIL_SERVICE_API_KEY=your_email_api_key

# SMS Service
VITE_SMS_SERVICE_API_KEY=your_sms_api_key
```

### Theme Customization

Modify `tailwind.config.ts` to customize colors and themes:

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Custom color palette
        primary: '#22c55e',    // Green
        secondary: '#64748b',  // Slate
        accent: '#f59e0b',     // Amber
      }
    }
  }
}
```

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the dist/ folder to Netlify dashboard
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and patterns
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Icons**: [Lucide React](https://lucide.dev/) for beautiful icons
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) for accessible components
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth interactions
- **Images**: Unsplash and local photography for stunning visuals

## 📞 Support

- **Email**: prateekchand1756@gmail.com
- **Phone**: +91 7042110863

---

**Made with ❤️ for adventure seekers in Dandeli**

Experience the thrill of nature's playground with Adventurous Hub! 🏞️🌿
