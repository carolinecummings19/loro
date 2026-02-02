import { useState } from 'react';
import { useApiKey } from '../hooks/useLocalStorage';
import './ChatUI.css';

const DEFAULT_MODEL = 'gpt-4o-mini';

const buildSystemPrompt = (scenario) => {
  const vocabularyList = scenario?.vocabulary
    ? scenario.vocabulary.map((item) => `${item.spanish} (${item.english})`).join(', ')
    : '';

  const assistantRole = scenario?.assistantRole || 'a friendly Spanish tutor';
  const learnerRole = scenario?.learnerRole || 'a Spanish learner practicing conversation';
  const title = scenario?.title || 'Spanish conversation practice';
  const titleEs = scenario?.titleEs || '';
  const instructions = scenario?.instructions || '';

  return [
    `You are a Spanish conversation tutor role-playing as ${assistantRole}.`,
    `The learner is ${learnerRole}.`,
    `Scenario: ${title}${titleEs ? ` (${titleEs})` : ''}.`,
    instructions ? `Lesson focus: ${instructions}` : '',
    vocabularyList ? `Useful vocabulary: ${vocabularyList}.` : '',
    'Stay in character and keep the conversation realistic for the scenario.',
    'Write primarily in Spanish. If the learner makes a mistake, provide a brief correction in English in parentheses, then continue in Spanish.',
    'Keep replies to 1-3 sentences and end with a short follow-up question to keep the dialogue going.',
  ]
    .filter(Boolean)
    .join(' ');
};

export function ChatUI({ scenario }) {
  const [apiKey] = useApiKey();
  const [messages, setMessages] = useState(() => [
    {
      role: 'assistant',
      content: scenario?.starterMessage
        ? scenario.starterMessage
        : `¡Hola! I'm your Spanish tutor. Let's practice the "${scenario?.title || 'conversation'}" scenario together. Type your message to start!`,
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const trimmedInput = inputValue.trim();

    const userMessage = {
      role: 'user',
      content: trimmedInput,
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInputValue('');
    setErrorMessage('');

    if (!apiKey) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: '⚠️ Please add your API key in Settings to enable AI conversations.',
        },
      ]);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: DEFAULT_MODEL,
          temperature: 0.7,
          max_tokens: 220,
          messages: [
            {
              role: 'system',
              content: buildSystemPrompt(scenario),
            },
            ...nextMessages.map((message) => ({
              role: message.role,
              content: message.content,
            })),
          ],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        const apiError = data?.error?.message || 'Request failed.';
        throw new Error(apiError);
      }

      const assistantReply = data?.choices?.[0]?.message?.content?.trim();

      if (!assistantReply) {
        throw new Error('No response from the model.');
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: assistantReply,
        },
      ]);
    } catch (error) {
      const readableError = error instanceof Error ? error.message : 'Something went wrong.';
      setErrorMessage(readableError);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: '⚠️ I had trouble reaching the AI service. Please check your API key and try again.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-ui">
      <h3 className="chat-title">💬 Practice Conversation</h3>
      <div className="chat-status">
        {apiKey ? `API key saved · Model: ${DEFAULT_MODEL}` : 'API key missing'}
      </div>
      {errorMessage && (
        <div className="chat-error">{errorMessage}</div>
      )}
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.role === 'user' ? 'user' : 'assistant'}`}
          >
            <div className="chat-message-content">{message.content}</div>
          </div>
        ))}
        {isLoading && (
          <div className="chat-message assistant">
            <div className="chat-message-content chat-typing">Escribiendo...</div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message in Spanish..."
          className="chat-input"
          disabled={isLoading}
        />
        <button type="submit" className="chat-send-btn" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}
