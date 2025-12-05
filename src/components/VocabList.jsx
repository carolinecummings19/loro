import './VocabList.css';

export function VocabList({ vocabulary }) {
  return (
    <div className="vocab-list">
      <h3 className="vocab-title">📚 Vocabulary</h3>
      <ul className="vocab-items">
        {vocabulary.map((word, index) => (
          <li key={index} className="vocab-item">
            <span className="vocab-spanish">{word.spanish}</span>
            <span className="vocab-divider">—</span>
            <span className="vocab-english">{word.english}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
