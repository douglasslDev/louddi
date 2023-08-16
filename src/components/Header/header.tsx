import * as Styled from "./styles";

const Header = () => {
  return (
    <Styled.container>
      <Styled.HeaderContainer>
        <Styled.logoImage src="/images/logo2.png" alt="logoIgreja" />
        <Styled.NavList>
          <Styled.NavItem>
            <Styled.Links href="https://www.google.com.br">
              olaaaaaaaaaaaaaaaa
            </Styled.Links>
            </Styled.NavItem>
            <Styled.NavItem>
            <Styled.Links href="https://www.google.com.br">
              A igreja
            </Styled.Links>
          </Styled.NavItem>
          <Styled.NavItem>Contato</Styled.NavItem>
        </Styled.NavList>
      </Styled.HeaderContainer>
      <Styled.Welcome>
        <Styled.Tittle>Seja bem vindo</Styled.Tittle>
        <Styled.Text>
          “Pois vocês são salvos pela graça, por meio da fé, e isto não vem de
          vocês, é dom de Deus; não por obras, para que ninguém se glorie.”{" "}
          <p />
          Efésios 2.8-9
        </Styled.Text>
      </Styled.Welcome>
    </Styled.container>
  );
};

export default Header;
