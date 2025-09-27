
# Surendra Ponguru - Portfolio Website with PostHog Analytics

## 🌐 Overview
A personal portfolio website for **Surendra Ponguru**, a Frontend Developer with expertise in **React** and modern web technologies. This website highlights Surendra's skills, projects, experience, and offers a way to get in touch. Now includes **PostHog analytics** for tracking user behavior and engagement.

## 📊 Analytics Setup

To start tracking your users with PostHog:

1. **Create a PostHog account** at [https://app.posthog.com](https://app.posthog.com)
2. **Get your Project API Key** from your PostHog project settings
3. **Update the analytics configuration** in `src/lib/analytics.ts`:
   ```typescript
   posthog.init('YOUR_ACTUAL_PROJECT_KEY_HERE', {
   ```

### What Gets Tracked:
- **Page Views**: Every page visit and navigation
- **Time on Page**: How long users spend on each section
- **Scroll Behavior**: Scroll depth tracking (25%, 50%, 75%, 100%)
- **Button Clicks**: All major interactions and buttons
- **Session Recordings**: Visual replays of user sessions
- **Project Interactions**: Which projects users view most
- **Contact Conversions**: Resume downloads and social link clicks

---

## ✨ Features
- Fully responsive layout for all device sizes  
- Dark/Light theme toggle  
- Interactive and animated UI components  
- Project showcase with detailed descriptions  
- Visual representation of skills and expertise  
- Validated contact form  
- Social media profile integration  

---

## 🛠️ Technologies Used
- **React + TypeScript**
- **React Router** – Client-side routing
- **Tailwind CSS** – Utility-first CSS framework
- **Shadcn UI** – Component library
- **Framer Motion** – Animations
- **React Hook Form** – Form state management
- **Zod** – Schema-based validation
- **TanStack Query** – Data fetching and caching
- **Lucide Icons** – Icon library

---

## 📄 Pages
- **Home** – Introduction and call-to-action  
- **About** – Personal background and professional profile  
- **Projects** – Featured development projects  
- **Skills** – Technical proficiencies  
- **Contact** – Contact form and links to social profiles  

---

## ⚙️ Setup & Installation

```bash
# 1. Clone the repository
git clone https://github.com/surendraponguru/portfolio.git

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Build for production
npm run build


## Project Structure
- `src/components` - Reusable UI components
- `src/pages` - Main page components
- `src/assets` - Static assets like images
- `src/hooks` - Custom React hooks
- `src/lib` - Utility functions


## Contact
Feel free to connect with me:
- Portifolio : [portifolio/surendraponguru](https://surendra-portfolio-three.vercel.app/)
- GitHub: [github.com/surendraponguru](https://github.com/surendraponguru)
- LinkedIn: [linkedin.com/in/surendra-ponguru](https://linkedin.com/in/surendra-ponguru)
- Email: ponguru720@gmail.com

## License
© 2025 Surendra Ponguru. All rights reserved.
