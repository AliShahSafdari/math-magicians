import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './style.css';

const CustomLink = (prop) => {
  const { to, children } = prop;
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: to, end: true });
  return (
    <li className={''}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

const Navbar = () => (
  <nav className="nav">
    <h1 className="site-title">Math magicians</h1>
    <ul>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/calculator">Calculator</CustomLink>
      <CustomLink to="/quote">Quote</CustomLink>
    </ul>
  </nav>
);
export default Navbar;
