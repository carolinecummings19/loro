import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="navbar-title">
          <span className="navbar-title-text">Loro</span>
        </span>
      </Link>
      <div className="navbar-links">
        <Link
          to="/"
          className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link
          to="/settings"
          className={`navbar-link ${location.pathname === '/settings' ? 'active' : ''}`}
        >
          Settings
        </Link>
      </div>
    </nav>
  );
}
