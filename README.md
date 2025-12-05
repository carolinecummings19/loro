# Loro - Spanish Learning App

A frontend-only Spanish learning web app built with React + Vite. Practice real-world Spanish conversations through scenario-based lessons.

## Features

- **5 Scenario-based Lessons**: Restaurant, Airport, Shopping, Doctor, and Directions
- **Vocabulary Lists**: Essential words and phrases for each scenario
- **Chat UI Placeholder**: Ready for LLM integration
- **Progress Tracking**: Lesson completion stored in localStorage
- **Settings Page**: Store your LLM API key securely in localStorage
- **Clean, Modern UI**: Simple and responsive design

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## GitHub Pages Deployment

This app is configured for GitHub Pages deployment. The `vite.config.js` sets the base path to `/loro/`.

To deploy:

1. Build the project: `npm run build`
2. The `dist` folder contains the production build
3. Deploy the `dist` folder to GitHub Pages

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ChatUI.jsx   # Chat interface placeholder
│   ├── Navbar.jsx   # Navigation bar
│   ├── ScenarioCard.jsx # Lesson card component
│   └── VocabList.jsx    # Vocabulary display
├── data/
│   └── scenarios.js  # Lesson content and vocabulary
├── hooks/
│   └── useLocalStorage.js # Custom hooks for localStorage
├── pages/
│   ├── Home.jsx     # Home page with scenario cards
│   ├── Lesson.jsx   # Individual lesson page
│   └── Settings.jsx # Settings page for API key
├── App.jsx          # Main app with routing
├── App.css          # App-level styles
├── index.css        # Global styles
└── main.jsx         # Entry point
```

## localStorage Keys

- `completedLessons`: Array of completed lesson IDs
- `llmApiKey`: User's LLM API key (stored securely in browser)

## Technologies

- React 19
- Vite 7
- React Router 7
- CSS (no framework, clean custom styles)
