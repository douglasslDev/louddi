import * as Styled from "./styles";
const Footer = () => {
  return (
    <Styled.Container>
      <Styled.FooterContainer>
        <Styled.TopContainer>
        <Styled.NavContainer>
        <Styled.NavItems>
          <Styled.Logo src="/images/logo2.png" alt="logoIgreja" />
        </Styled.NavItems>
        </Styled.NavContainer>
          <Styled.NavContainer>
            <Styled.NavTitles>Navegação</Styled.NavTitles>
            <Styled.NavItems>
              <Styled.Links href="#">Programação</Styled.Links>
            </Styled.NavItems>
            <Styled.NavItems>
              <Styled.Links href="#">Quem Somos</Styled.Links>
            </Styled.NavItems>
            <Styled.NavItems>
              <Styled.Links href="#">Colabore</Styled.Links>
            </Styled.NavItems>
          </Styled.NavContainer>
          <Styled.NavContainer>
            <Styled.NavTitles>Onde Estamos</Styled.NavTitles>
            <Styled.NavItems>
              Travessa Riachuelo 99 Nilópolis-RJ CEP: 26520-590
            </Styled.NavItems>
            </Styled.NavContainer>
           
        </Styled.TopContainer>
        <Styled.BottomContainer></Styled.BottomContainer>
      </Styled.FooterContainer>
    </Styled.Container>
  );
};

export default Footer;
