import * as Styled from "./styles";

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
              Onde Estamos
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
    
      <Styled.Welcome>
        <Styled.Tittle>Seja bem vindo</Styled.Tittle>
        <Styled.Text>
          “Pois vocês são salvos pela graça, por meio da fé, e isto não vem de
          vocês, é dom de Deus; não por obras, para que ninguém se glorie.”{" "}
          <p />
          Efésios 2.8-9
        </Styled.Text>
      </Styled.Welcome>
      <Styled.Where>
        Onde Estamos
      </Styled.Where>
      </Styled.HeaderContainer>
    </Styled.container>
  );
};

export default Header;
