import { ScenarioCard } from '../components/ScenarioCard';
import { scenarios } from '../data/scenarios';
import { useLessonProgress } from '../hooks/useLocalStorage';
import './Home.css';

export function Home() {
  const { isLessonComplete, completedLessons } = useLessonProgress();

  return (
    <div className="home">
      <header className="home-header">
        <h1 className="home-title">Learn Spanish Through Scenarios</h1>
        <p className="home-subtitle">
          Practice real-world conversations with interactive lessons
        </p>
        <div className="home-progress">
          <span className="progress-text">
            {completedLessons.length} of {scenarios.length} lessons completed
          </span>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${(completedLessons.length / scenarios.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </header>

      <section className="scenarios-section">
        <h2 className="scenarios-title">Choose a Scenario</h2>
        <div className="scenarios-grid">
          {scenarios.map((scenario) => (
            <ScenarioCard
              key={scenario.id}
              scenario={scenario}
              isComplete={isLessonComplete(scenario.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
