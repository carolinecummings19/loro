import { Link } from 'react-router-dom';
import './ScenarioCard.css';

export function ScenarioCard({ scenario, isComplete }) {
  return (
    <Link to={`/lesson/${scenario.id}`} className="scenario-card">
      <div className="scenario-icon">{scenario.icon}</div>
      <div className="scenario-content">
        <h3 className="scenario-title">{scenario.title}</h3>
        <p className="scenario-title-es">{scenario.titleEs}</p>
        <p className="scenario-description">{scenario.description}</p>
      </div>
      {isComplete && (
        <div className="scenario-complete-badge">✓ Complete</div>
      )}
    </Link>
  );
}
