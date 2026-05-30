<div align="center">
  <img src="public/logo.png" width="100" />
  <h1>HackNova | The Code of the Samurai</h1>
</div>

## Overview
**HackNova 2026** is the official landing page for the premium 24-hour National Level Artificial Intelligence hackathon organized by Sphere Hive at Joy University, Tamil Nadu.

This responsive, premium SPA (Single Page Application) serves as the primary informational hub for participants, providing details on:
- 🗓️ Event Timelines & Scheduling
- 🤖 Challenge Domains & Tracks
- 🤝 Honored Sponsors & Partnerships (e.g., 3LC.ai, Gen.xyz)
- 📜 Event Policies (Privacy, Terms, Code of Conduct)

## Tech Stack
Built with modern frontend tooling to deliver a blazing-fast, high-converting experience:
- **Core:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (for buttery-smooth scroll reveals)
- **Routing:** React Router v6
- **Icons:** Lucide React

## Design System
The application utilizes a highly customized **Samurai / Cyberpunk** aesthetic:
- **Colors**: Deep solid backgrounds (`samurai-black`), vibrant and glowing accents (`samurai-red`, `samurai-orange`).
- **Shapes**: Sharp, angled UI elements achieved via CSS `clip-path` giving the interface a "blade-like" appearance.
- **Textures**: Glassmorphism cards with active background blurs and ambient radial glows.

## Registration Integration
To maximize conversions, all major CTA ("Register Now", "Claim Your Spot") buttons natively deep-link to the event's official **Unstop** registration page without disrupting the user flow.

## Getting Started

### Prerequisites
Ensure Node.js is installed on your local development machine.

### Local Initialization

1. Clone this repository and navigate to the project root.
2. Install all module dependencies:
   ```bash
   npm install
   ```
3. Boot up the Vite preview/dev server:
   ```bash
   npm run dev
   ```
4. The application will be accessible at `http://localhost:3000` (or whichever port Vite allocates).

## Deployment & Production
To build a production-ready optimized bundle, execute:
```bash
npm run build
```
This generates the raw static assets into the `/dist` directory, completely ready for any static hosting deployment (Vercel, Netlify, GitHub Pages, Firebase, etc.).
