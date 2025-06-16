import { useLocation } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import { Container, NavBar, StyledLink } from './styles';

function Header() {
  const location = useLocation();

  const shouldHideNavBar =
    location.pathname.includes('/new') || location.pathname.includes('/edit');

  return (
    <Container>
      <img src={logo} alt="Mycontacts" width={201} />
      {!shouldHideNavBar && (
        <NavBar>
          <StyledLink to="/" end>
            Contatos
          </StyledLink>
          <StyledLink to="/categories">Categorias</StyledLink>
        </NavBar>
      )}
    </Container>
  );
}

export default Header;
