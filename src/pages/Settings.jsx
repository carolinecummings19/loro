import { useState } from 'react';
import { useApiKey, useLessonProgress } from '../hooks/useLocalStorage';
import './Settings.css';

export function Settings() {
  const [apiKey, setApiKey] = useApiKey();
  const { completedLessons, resetProgress } = useLessonProgress();
  const [inputValue, setInputValue] = useState(apiKey);
  const [showKey, setShowKey] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    setInputValue(trimmedValue);
    setApiKey(trimmedValue);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all lesson progress? This cannot be undone.')) {
      resetProgress();
    }
  };

  const handleClearApiKey = () => {
    if (window.confirm('Are you sure you want to clear your API key?')) {
      setInputValue('');
      setApiKey('');
    }
  };

  return (
    <div className="settings">
      <h1 className="settings-title">⚙️ Settings</h1>

      <section className="settings-section">
        <h2 className="section-title">LLM API Configuration</h2>
        <p className="section-description">
          Enter your API key to enable AI-powered conversation practice. Your key is stored locally in your browser and never sent to our servers.
        </p>
        <form onSubmit={handleSave} className="api-form">
          <div className="input-group">
            <label htmlFor="apiKey" className="input-label">API Key</label>
            <div className="input-wrapper">
              <input
                id="apiKey"
                type={showKey ? 'text' : 'password'}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter your API key..."
                className="api-input"
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="toggle-visibility"
              >
                {showKey ? '🙈 Hide' : '👁️ Show'}
              </button>
            </div>
          </div>
          <div className="button-group">
            <button type="submit" className="save-btn">
              {saved ? '✓ Saved!' : 'Save API Key'}
            </button>
            {apiKey && (
              <button type="button" onClick={handleClearApiKey} className="clear-btn">
                Clear Key
              </button>
            )}
          </div>
        </form>
      </section>

      <section className="settings-section">
        <h2 className="section-title">Progress</h2>
        <p className="section-description">
          You have completed {completedLessons.length} lesson{completedLessons.length !== 1 ? 's' : ''}.
        </p>
        <button onClick={handleReset} className="reset-btn">
          Reset All Progress
        </button>
      </section>

      <section className="settings-section">
        <h2 className="section-title">About</h2>
        <p className="section-description">
          Loro is a Spanish learning app that helps you practice real-world conversations through scenario-based lessons. All your data is stored locally in your browser.
        </p>
      </section>
    </div>
  );
}
