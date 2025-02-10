import { Link } from 'react-router-dom';
const navItems = [
  { path: '/', label: 'Home' },
  { path: '/jobsExperience', label: 'Arbets Erfarenhet' },
  { path: '/projects', label: 'Projects' },
  { path: '/diceGame', label: 'Dice Game' },
  { path: '/contact', label: 'Contact Me' },
];
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
