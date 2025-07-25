import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navbars() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      style={{
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        background: 'linear-gradient(to right, #2e7d32, #1b5e20)',
        fontFamily: "'Segoe UI', sans-serif"
      }}
    >
      <Container>
        <Navbar.Brand
          href="/"
          className="fw-bold"
          style={{
            fontSize: '1.5rem',
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
        >
          NeighbourMart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {[
              { to: '/signup', label: 'Sign up' },
              { to: '/login', label: 'Login' },
              { to: '/', label: 'Home' },
              { to: '/create', label: 'Create Group' },
              { to: '/browse', label: 'Browse Groups' },
              { to: '/mygroups', label: 'My Groups' },
              { to: '/about', label: 'About Us' }
            ].map((item) => (
              <Nav.Link
                key={item.to}
                as={Link}
                to={item.to}
                style={{
                  color: 'white',
                  margin: '0 10px',
                  fontWeight: '500',
                  transition: '0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#c8e6c9')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
