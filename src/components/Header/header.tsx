import * as Styled from "./styles";

const Header = () => {
  return (
    <Styled.container>
      <Styled.HeaderContainer>
        <Styled.NavContainer>
        <Styled.logoImage src="/images/logo2.png" alt="logoIgreja" />
        <Styled.NavList>
          <Styled.NavItem>
            <Styled.Links href="#">Programação</Styled.Links>
          </Styled.NavItem>
          <Styled.NavItem>
            <Styled.Links href="#whoweare">
              Quem Somos
            </Styled.Links>
          </Styled.NavItem>
         
          
         
          <Styled.NavItem>
            <Styled.Links href="#collaborate">
              Colabore
            </Styled.Links>
          </Styled.NavItem>
        </Styled.NavList>
        
        </Styled.NavContainer>
        <Styled.WhereContainer href="#location" >
          <Styled.Where>
        Onde Estamos
        </Styled.Where>
          <Styled.IconWhere />
        
      </Styled.WhereContainer>
    
      </Styled.HeaderContainer>
    </Styled.container>
  );
};

export default Header;
