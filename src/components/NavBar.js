import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

const categories = [
  { id: 'electronica', label: 'Electrónica' },
  { id: 'ropa',         label: 'Ropa' },
  { id: 'libros',       label: 'Libros' },
];

const NavBar = () => (
  <nav className="navbar">
    <Link className="brand" to="/">MiTienda</Link>
    <ul className="nav-links">
      {categories.map(c => (
        <li key={c.id}>
          <NavLink to={`/category/${c.id}`}>{c.label}</NavLink>
        </li>
      ))}
    </ul>
    <Link className="cart" to="/cart">🛒</Link>
  </nav>
);

export default NavBar;
