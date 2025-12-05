import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}

export function useLessonProgress() {
  const [completedLessons, setCompletedLessons] = useLocalStorage('completedLessons', []);

  const markLessonComplete = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const isLessonComplete = (lessonId) => {
    return completedLessons.includes(lessonId);
  };

  const resetProgress = () => {
    setCompletedLessons([]);
  };

  return { completedLessons, markLessonComplete, isLessonComplete, resetProgress };
}

export function useApiKey() {
  const [apiKey, setApiKey] = useLocalStorage('llmApiKey', '');
  return [apiKey, setApiKey];
}
