# Loro — Spanish Learning App

Loro is a scenario‑based Spanish practice app built with React and Vite. It helps learners practice real‑world conversations through guided lessons, vocabulary lists, and AI‑powered chat.

## Highlights

- Scenario‑based lessons (restaurant, airport, shopping, doctor, directions)
- Vocabulary support tailored to each scenario
- AI chat with prompt engineering and roleplay guidance
- Progress tracking stored locally in the browser
- Simple, modern UI built with custom CSS

## Screenshots

Add screenshots by replacing the image links below.

![Home](docs/images/home.png)


![Lesson](docs/images/lesson.png)


![Chat](docs/images/chat.png)


![Settings](docs/images/settings.png)


## Live Demo

If you host this app, add the URL here.

- Demo: https://example.com

## Getting Started

### Requirements

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Configuration

### API key

The app uses a user‑provided API key stored locally in the browser under `llmApiKey`.

### localStorage keys

- `completedLessons`: Array of completed lesson IDs
- `llmApiKey`: LLM API key stored in the browser

## Project Structure

```
src/
├── components/
│   ├── ChatUI.jsx
│   ├── Navbar.jsx
│   ├── ScenarioCard.jsx
│   └── VocabList.jsx
├── data/
│   └── scenarios.js
├── hooks/
│   └── useLocalStorage.js
├── pages/
│   ├── Home.jsx
│   ├── Lesson.jsx
│   └── Settings.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Deployment (GitHub Pages)

This app is configured for GitHub Pages. The base path is set to `/loro/` in `vite.config.js`.

1. Build: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

## Tech Stack

- React 19
- Vite 7
- React Router 7
- CSS (custom)
