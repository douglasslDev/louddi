import * as Styled from "./styles";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Header = () => {
  return (
    <Styled.container>
      <Styled.HeaderContainer>
        <Styled.NavContainer>
        <Styled.logoImage src="/images/logo2.png" alt="logoIgreja" />
        <Styled.NavList>
          <Styled.NavItem>
            <Styled.Links href="https://www.google.com.br">Home</Styled.Links>
          </Styled.NavItem>
          <Styled.NavItem>
            <Styled.Links href="https://www.google.com.br">
              Quem Somos
            </Styled.Links>
          </Styled.NavItem>
         
          <Styled.NavItem>
            <Styled.Links href="https://www.google.com.br">
              Colabore
            </Styled.Links>
          </Styled.NavItem>
          <Styled.NavItem>
            
            <Styled.Links href="https://www.google.com.br">
              Contato
            </Styled.Links>
          </Styled.NavItem>
        </Styled.NavList>
        </Styled.NavContainer>
        <Styled.WhereContainer>
          <Styled.Where>
        Onde Estamos
        </Styled.Where>
          <LocationOnIcon style={{ fontSize: '20px' }}/>
        
      </Styled.WhereContainer>
    
      </Styled.HeaderContainer>
    </Styled.container>
  );
};

export default Header;
