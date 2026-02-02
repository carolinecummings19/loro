# Loro — Spanish Learning App

Loro is a scenario‑based Spanish practice app built with React and Vite. It helps learners practice real‑world conversations through guided lessons, vocabulary lists, and AI‑powered chat.

## Highlights

- Scenario‑based lessons (restaurant, airport, shopping, doctor, directions)
- Vocabulary support tailored to each scenario
- AI chat with prompt engineering and roleplay guidance
- Progress tracking stored locally in the browser
- Simple, modern UI built with custom CSS

## Screenshots
### Home Screen
<img width="1400" height="697" alt="Screenshot 2026-02-02 at 12 07 02 AM" src="https://github.com/user-attachments/assets/1beea27b-6da0-4fb1-8625-2f5aaa194f71" />

### Lesson
<img width="1399" height="688" alt="Screenshot 2026-02-02 at 12 08 17 AM" src="https://github.com/user-attachments/assets/dd875878-7a33-4ec5-8132-ffb5454624c3" />

### Chat
<img width="1403" height="694" alt="Screenshot 2026-02-02 at 12 10 01 AM" src="https://github.com/user-attachments/assets/b8a98c8a-7355-48ae-b94a-c314f8e017a0" />

### Settings
<img width="1403" height="693" alt="Screenshot 2026-02-02 at 12 11 11 AM" src="https://github.com/user-attachments/assets/3f8d25a3-411d-4c61-bb54-2ec889422158" />

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

## Tech Stack

- React 19
- Vite 7
- React Router 7
- CSS (custom)
