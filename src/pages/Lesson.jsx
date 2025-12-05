import { useParams, Link, useNavigate } from 'react-router-dom';
import { VocabList } from '../components/VocabList';
import { ChatUI } from '../components/ChatUI';
import { scenarios } from '../data/scenarios';
import { useLessonProgress } from '../hooks/useLocalStorage';
import './Lesson.css';

export function Lesson() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { markLessonComplete, isLessonComplete } = useLessonProgress();

  const scenario = scenarios.find((s) => s.id === parseInt(id));

  if (!scenario) {
    return (
      <div className="lesson-not-found">
        <h2>Lesson not found</h2>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    );
  }

  const handleMarkComplete = () => {
    markLessonComplete(scenario.id);
  };

  const isComplete = isLessonComplete(scenario.id);

  return (
    <div className="lesson">
      <div className="lesson-header">
        <Link to="/" className="back-link">← Back to Scenarios</Link>
        <div className="lesson-title-section">
          <span className="lesson-icon">{scenario.icon}</span>
          <div>
            <h1 className="lesson-title">{scenario.title}</h1>
            <p className="lesson-title-es">{scenario.titleEs}</p>
          </div>
        </div>
      </div>

      <div className="lesson-content">
        <section className="lesson-section">
          <h2 className="section-title">📝 Instructions</h2>
          <p className="instructions-text">{scenario.instructions}</p>
        </section>

        <section className="lesson-section">
          <VocabList vocabulary={scenario.vocabulary} />
        </section>

        <section className="lesson-section">
          <ChatUI scenarioTitle={scenario.title} />
        </section>

        <div className="lesson-actions">
          {isComplete ? (
            <div className="lesson-complete-status">
              ✓ You've completed this lesson!
            </div>
          ) : (
            <button onClick={handleMarkComplete} className="complete-btn">
              Mark as Complete
            </button>
          )}
          <button onClick={() => navigate('/')} className="return-btn">
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}
