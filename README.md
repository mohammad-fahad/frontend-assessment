Frontend Assessment – Mohammad Fahad
🚀 Live Demo

https://frontend-assessment-ruby.vercel.app/

🛠 Tech Stack
Next.js (App Router)
TypeScript
Tailwind CSS
Framer Motion
Vercel (Deployment)
🎯 Objective

The goal of this assessment was to implement a production-quality landing page from a Figma design, ensuring:

Visual accuracy
Responsive behavior
Clean and scalable architecture
Maintainable and reusable components
🧠 Approach & Thought Process
1. Component-Driven Architecture

I structured the project into:

UI components → reusable building blocks (Button, Card, Container)
Section components → page-level composition (Hero, Features, etc.)

This separation ensures:

Reusability
Scalability
Clear responsibility boundaries
2. Layout & Spacing System

Instead of arbitrary spacing, I followed a consistent spacing scale:

Section spacing → py-20 md:py-28
Internal spacing → mt-6, mt-8, mt-12
Grid gaps → gap-6 md:gap-8

This improves:

Visual consistency
Maintainability
Faster iteration
3. Responsive Strategy

Used a mobile-first approach:

Base styles for mobile
Progressive enhancement with md, lg breakpoints
Flexible layouts using flex and grid

Tested across:

Mobile
Tablet
Desktop
4. Design Fidelity Decisions

Since the Figma file was view-only (no exact values), I focused on:

Matching visual proportions instead of exact pixels
Maintaining typography hierarchy
Ensuring consistent spacing rhythm

Trade-off:

Prioritized visual accuracy over pixel-perfect exactness due to limited inspect access.

5. Hero Section Implementation

The hero section was treated as the primary conversion area:

Strong typography hierarchy
Clear CTA emphasis
Breakout layout for media (video/image wider than text container)

This improves:

Visual impact
User attention flow
6. Reusability & Abstraction

Created reusable components:

Container → layout consistency
Section → spacing standardization
Card → reused across multiple sections
FadeUp → animation wrapper

Benefit:

Reduces duplication
Improves scalability
7. Animations & UX

Used Framer Motion for subtle animations:

Fade + upward motion on scroll
Hover interactions on cards and buttons

Goal:

Enhance UX without harming performance
8. Performance Considerations
Used optimized image handling
Avoided unnecessary re-renders
Kept animation lightweight
⚖️ Trade-offs & Decisions
Decision	Reason
Tailwind CSS	Faster iteration and consistency
Component abstraction	Improves scalability
View-based Figma matching	No inspect access
Lightweight animations	Balance UX and performance
📁 Project Structure
/app
/components
  /ui        → reusable components
  /sections  → page sections
/lib         → utilities
/public      → assets
✨ Key Highlights
Clean and scalable architecture
Strong attention to spacing and layout consistency
Reusable component system
Responsive and accessible UI
Subtle animations for enhanced UX
📦 Run Locally
git clone https://github.com/mohammad-fahad/frontend-assessment.git
cd frontend-assessment
npm install
npm run dev
👨‍💻 Author

**Mohammad Fahad**
Frontend Developer