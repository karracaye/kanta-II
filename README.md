# 🚀 Kanta.AI — Autonomous AI Application & Workflow Platform

A modern, high-performance, light-mode React web application for **Kanta.AI** built with Vite, Tailwind CSS, and Lucide React vector icons.

---

## 📌 Project Overview

This repository contains the complete frontend codebase for Kanta's landing page and interactive product showcase. It features:
- **Interactive 3-Second Loading SplashScreen**: Displays an AI Bot Chat dialogue using the 2D robot avatar (`robot-happy.png`) and Kanta logo lockup.
- **Header Navbar**: Fixed, responsive navbar with circle CTA styling (`rounded-full border-2 border-red-600`) and mobile drawer.
- **Top Hero Page**: Full-width interactive hero featuring the static central robot video, AI Chat widget, and floating telemetry cards.
- **Brand Banner**: Flat Kanta Red gradient banner (`Build your app in minutes. Autonomous AI Platform`).
- **Platform Transformer**: Segmented switcher comparing Traditional Disconnected Toolstacks vs. Kanta's 12ms execution DAG engine.
- **Unified Stack**: 3 core platform pillars (*Apps*, *Workflows*, *Database*) with `rounded-3xl` cards and soft border lines.
- **Workflow Studio**: Compact 4-step visual building block guide (*Triggers*, *AI Reasoning*, *Actions/Logic*, *Database Output*).
- **Embedded AI Agent**: Interactive chat assistant stage with iframe code snippet generator and row-level security badge.
- **Integrations & Supported Providers**: Native connectors grid (*OpenAI, Anthropic, Gemini, Llama 3, Pinecone, PostgreSQL*).
- **Enterprise Use Cases**: Metrics cards for Operations, SaaS, and Analyst workflows.
- **Compact Get Started CTA**: Work email signup form and booking trigger.
- **Dark Red Footer**: Responsive footer with mobile-centered layout and enlarged Kanta logo.
- **Interactive Book Demo Modal**: Full-featured scheduling modal with form validation and confirmation step.

---

## 📁 Directory Structure & Component Map

```text
kanta-design-2/
├── index.html                  # HTML5 entry with SEO tags, OpenGraph cards, fonts & noscript
├── package.json                # Project dependencies & Vite scripts
├── vite.config.js              # Vite bundler configuration
├── tailwind.config.js          # Tailwind CSS theme extension
├── public/                     # Static media & logo assets
│   └── assets/
│       └── logo/
│           ├── Iconic-Color.svg
│           ├── Iconic-Color@2x.png
│           ├── Lockup-Color@2x.png
│           ├── robot-happy.png
│           └── icon.png
└── src/
    ├── main.jsx                # React DOM root renderer
    ├── App.jsx                 # Main application layout orchestrator
    ├── index.css               # Global CSS, Tailwind directives, font variables & keyframes
    └── components/
        ├── SplashScreen.jsx    # 3-Second AI Bot Chat loading screen
        ├── Navbar.jsx          # Top header with pill CTA button & mobile drawer
        ├── HeroSection.jsx     # Hero page layout container
        ├── RobotVideo.jsx      # Central robot animation video player
        ├── AIChatWidget.jsx    # Live chat widget component
        ├── GreetingBubble.jsx  # Floating speech bubble card
        ├── FloatingFeatureCard.jsx # Telemetry cards (Row security, voice, DB access)
        ├── ParallaxFeatures.jsx # Kanta Red gradient banner
        ├── ProblemSolutionSection.jsx # Platform Transformer & DAG pipeline stage
        ├── UnifiedPlatformSection.jsx # Apps, Workflows, and Database cards
        ├── WorkflowStudioSection.jsx # 4-Step visual node library building block guide
        ├── EmbeddedAgentSection.jsx # Embeddable chat assistant & code generator
        ├── IntegrationsSection.jsx # Supported AI models & database connectors
        ├── UseCasesSection.jsx  # Enterprise metrics cards
        ├── GetStartedCTA.jsx   # Work email lead capture form
        ├── Footer.jsx          # Mobile-centered dark red footer
        └── DemoModal.jsx       # Book demo scheduling modal
```

---

## 🎨 Official Brand Design System & Color Specs

| Color Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Kanta Primary Red** | `#D83025` | Primary buttons, active tabs, brand accents |
| **Kanta Flame Orange** | `#FF5722` | Secondary highlights, gradient blends |
| **Kanta Gold** | `#FBBF24` | Metric highlights, section tags |
| **Slate Dark** | `#0F172A` | Terminal boxes, dark header containers |
| **Warm Light Cream** | `#FAF6F0` | Section background pattern tint |
| **Pure White** | `#FFFFFF` | Card containers, primary background |

### Typography
- **Headings (`font-['Outfit']` / `Space Grotesk`)**: Geometric brand font for titles and logo text.
- **Body (`Plus Jakarta Sans`)**: Clean sans-serif for readable copy and features.
- **Telemetry (`JetBrains Mono`)**: Monospace for latency stats, code snippets, and DAG badges.

---

## 🛠️ Getting Started & Scripts

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates an optimized, minified production build in the `dist/` directory (~950ms compile time).

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🤝 Developer Handoff Notes

1. **No External Emojis**: All icons use official SVG vectors from `lucide-react` (`Play`, `Cpu`, `Zap`, `Database`, `FileText`, `Tag`, `GitBranch`, `Code`, `BarChart3`, `Flag`).
2. **Circle & Pill Theme**: Action buttons use `rounded-full`, tags use `rounded-full`, and card containers use `rounded-3xl` with soft 1px border lines (`border border-slate-200/90`).
3. **Asset Handling**: Logos and robot icons are stored in `public/assets/logo/` and referenced cleanly via `/assets/logo/...` root relative URLs.
