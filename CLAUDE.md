# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a nostalgic, retro-styled single-page website for Stoopid Company, built as a fun throwback to 1990s web design. It's a GitHub Pages site featuring animated backgrounds, interactive Easter eggs, and modern AI/tech business content wrapped in vintage aesthetics.

The site is **deployed via GitHub Pages** at stoopid.website and serves as both a portfolio showcase and a playful homage to early internet culture.

## Tech Stack

- **Pure HTML/CSS/JavaScript** - No build tools, frameworks, or dependencies
- **Static hosting** - GitHub Pages deployment from main branch
- **External integrations:**
  - WebSocket connection to `wss://stoopidmovie.fly.dev/` for ASCII Star Wars theater
  - cornify.js for Easter egg effects

## Project Structure

```
/
├── index.htm           # Main HTML file (single page)
├── theater.html        # Full-screen movie theater experience (Star Wars)
├── styles.css          # All styling including animations
├── script.js           # Interactive features and Easter eggs
├── cornify.js          # Third-party library for Konami code effect
├── assets/             # Images, GIFs, audio files, badges
└── CNAME               # Domain configuration for GitHub Pages
```

## Development Workflow

### Testing Changes Locally

Since this is a static site with no build process:

```bash
# Simple HTTP server (Python 3)
python3 -m http.server 8000

# Alternative (Python 2)
python -m SimpleHTTPServer 8000

# Alternative (if you have Node.js)
npx http-server
```

Visit http://localhost:8000 to test changes.

### Deployment

Changes pushed to the `main` branch are **automatically deployed** to GitHub Pages. No manual deployment steps needed.

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

## Key Interactive Features

### Easter Eggs (Keyboard Shortcuts)

The site includes two hidden keyboard sequences implemented in script.js:

1. **Konami Code** (`↑ ↑ ↓ ↓ ← → ← → B A ENTER`)
   - Triggers cornify effect via `cornify()` function
   - Adds unicorns and rainbows to the page

2. **Mortal Kombat Code** (`A B A C A B B`)
   - Triggers "metal mode" via `makeItMetal()` function
   - Changes background to fire.gif, adds skull GIFs, plays audio
   - Transforms site theme to heavy metal aesthetic

### Interactive Buttons

- **Business Button** (`#bizButton`) - Redirects to jasonanton.com
- **Cool Button** (`#coolButton`) - Opens theater.html in new tab/window
  - Full-screen movie theater experience with curtain animation
  - Connects via WebSocket to external server (stoopidmovie.fly.dev)
  - Displays telnet-style Star Wars animation (from towel.blinkenlights.nl)
  - Plays synchronized audio (sw.mp3)
  - Features animated red velvet curtains that open before the show
  - Includes controls for stopping audio and exiting theater

### Dynamic Elements

- **Hit Counter** - Randomly generated number (1337000-1337999) on page load
- **Starfield Animation** - CSS-based light-speed effect (disabled on mobile for performance)
- **Marquee Text** - Infinite scrolling business highlights

## CSS Architecture

The styles.css file uses a mobile-first approach with specific breakpoints:

- **Mobile (< 768px)**: Simplified animations, no starfield, single-column grid layouts
- **Desktop (≥ 768px)**: Full starfield animation, complex keyframes, multi-column grids

Key animation features:
- `@keyframes zoom` - Starfield light-speed effect
- `@keyframes rainbow` - Color-cycling text
- `@keyframes blink` - Retro blinking effect
- `@keyframes marquee` - Scrolling text
- `@keyframes gradientShift` - Header background animation

## Important Conventions

### Visual Style

This site intentionally uses **retro 90s web design** patterns:
- Comic Sans MS font
- Neon colors and gradients
- Animated GIFs and blinking text
- Border styles (ridge, inset, outset)
- Table-based info layouts

**When making changes, maintain this aesthetic.** Do not modernize the design or remove "outdated" elements - they're intentional.

### Asset Management

Audio and image files in `/assets/` are referenced throughout the code:
- Audio: mk.mp3, toasty.mp3, mop.mp3, sw.mp3
- GIFs: butthead.gif, bevis.gif, skull.gif, fire.gif, wow.gif, netscape.gif, contact.gif, code.gif
- Images: logo.png, stars1-4.png

**Always verify asset paths when adding new media files.**

### External Dependencies

- **cornify.js**: Loaded dynamically on Konami code trigger - don't modify
- **WebSocket server**: Hosted externally at stoopidmovie.fly.dev - not part of this repo

## Git Workflow

**Main branch**: `main`
**Current branch**: `updates`

Recent commits show the site is actively maintained with fixes and feature additions. When creating PRs, target the `main` branch.

## Testing Checklist

Before pushing changes:

1. Test all interactive buttons work correctly
2. Verify Easter egg keyboard sequences trigger properly
3. Check responsive behavior on mobile (< 768px) and desktop
4. Ensure external links open in new tabs where appropriate
5. Test WebSocket connection for Star Wars theater feature
6. Verify audio files play on user interaction (check browser autoplay policies)
7. Confirm no console errors in browser DevTools
