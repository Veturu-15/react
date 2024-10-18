import { Link } from 'react-router-dom';
import  Container  from 'react-bootstrap/Container';
function Header() {
  return (
    <Container>
      <div className='Header'>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <Link to={"/" }>Home</Link>
              </li>
              <li>
                <Link to={"/about" }>About</Link>
              </li>
              <li>
                <Link to={"/services"}>Services</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
            </div>
        </Container>
  );
}

export default Header;
