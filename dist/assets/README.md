# Kanta Design 2 Assets Directory

This folder is configured for storing custom media files such as MP4 videos and Kanta logo images.

## Directory Structure

```
public/assets/
├── logo/
│   ├── kanta-logo.svg        <-- Main full logo (Icon + Red Wordmark)
│   ├── kanta-logo-white.svg  <-- White wordmark logo for dark backgrounds
│   └── kanta-icon.svg        <-- Standalone starburst mark
├── videos/
│   ├── demo.mp4              <-- Drop your hero/demo MP4 video here!
│   └── kanta-overview.mp4
└── images/
    ├── video-poster.jpg      <-- Video thumbnail poster image
    └── hero-banner.png
```

## How to Upload Files

1. **MP4 Video**:
   - Save your video file as `demo.mp4` inside `public/assets/videos/demo.mp4`.
   - The embedded video player component ([`VideoShowcase.jsx`](file:///Users/karracayesantillan/.gemini/antigravity/scratch/kanta-design-2/src/components/VideoShowcase.jsx)) will automatically play your uploaded MP4 video on the website!

2. **Kanta Logo**:
   - Vector SVG logos have already been created in `public/assets/logo/`.
   - If you have a custom PNG or SVG logo, place it in `public/assets/logo/` and update [`Navbar.jsx`](file:///Users/karracayesantillan/.gemini/antigravity/scratch/kanta-design-2/src/components/Navbar.jsx) or [`Footer.jsx`](file:///Users/karracayesantillan/.gemini/antigravity/scratch/kanta-design-2/src/components/Footer.jsx).
