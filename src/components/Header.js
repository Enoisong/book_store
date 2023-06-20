import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="heading">
      <div className="h1">
        <h1>Bookstore</h1>
      </div>
      <nav className="nav">
        <ul>
          <h3><li><Link to="/">Books</Link></li></h3>
          <h3><li><Link to="/categories">Categories</Link></li></h3>
        </ul>
      </nav>
    </header>
  );
}
