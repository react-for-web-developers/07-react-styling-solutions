import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, Button } from 'react-bootstrap'

import AppContext from '../context';

function Header() {
  const { theme, setTheme } = useContext(AppContext);

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
  }

  return (
    <Navbar
      className={theme === 'light' ? "container-nav" : "container-nav-dark"}
      variant="ligth"
      sticky="top"
    >
      <Navbar.Collapse className="d-flex justify-content-center py-3">
        <Nav className="col-md-3"></Nav>
        <Nav className="col-md-5">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/features" className="nav-link">Features</Link>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/about" className="nav-link">About</Link>
        </Nav>
        <Nav className="col-md-4 text-end">
          <Button variant="light" onClick={handleTheme}>Switch Theme</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;