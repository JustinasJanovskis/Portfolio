import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    //Navbar Styling
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#282c34',
        color: 'lightblue',
      }}
    >
      {/* Left text */}
      <div style={{ fontWeight: 'bold', fontSize: '18px' }}>
        Justinas Janovskis' Portfolio
      </div>

      {/* Right side nav links */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
    </nav>
  );
}
