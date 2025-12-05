import { useState } from 'react';
import './ChatUI.css';

export function ChatUI({ scenarioTitle }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `¡Hola! I'm your Spanish tutor. Let's practice the "${scenarioTitle}" scenario together. Type your message to start!`,
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      role: 'user',
      content: inputValue,
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    // Placeholder response - in a real app, this would call the LLM API
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: '🚧 Chat functionality coming soon! This is a placeholder. Configure your API key in Settings to enable AI conversations.',
        },
      ]);
    }, 500);
  };

  return (
    <div className="chat-ui">
      <h3 className="chat-title">💬 Practice Conversation</h3>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.role === 'user' ? 'user' : 'assistant'}`}
          >
            <div className="chat-message-content">{message.content}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message in Spanish..."
          className="chat-input"
        />
        <button type="submit" className="chat-send-btn">
          Send
        </button>
      </form>
    </div>
  );
}
