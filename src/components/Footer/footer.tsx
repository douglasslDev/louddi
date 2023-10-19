import * as Styled from "./styles";
const Footer = () => {
  return (
    <Styled.Container>
      <Styled.FooterContainer>
        <Styled.TopContainer>
          <Styled.LogoContainer>
            <Styled.NavItems>
              <Styled.Logo src="/images/logoBranca.png" alt="logoIgreja" />
            </Styled.NavItems>
          </Styled.LogoContainer>

          <Styled.NavContainer>
            <Styled.NavTitles>Navegação:</Styled.NavTitles>
            <Styled.NavItems>
              <Styled.Links href="#">Programação</Styled.Links>
            </Styled.NavItems>
            <Styled.NavItems>
              <Styled.Links href="#whoweare">Quem Somos</Styled.Links>
            </Styled.NavItems>
            <Styled.NavItems>
              <Styled.Links href="#collaborate">Colabore</Styled.Links>
            </Styled.NavItems>
          </Styled.NavContainer>
          <Styled.NavContainer>
            <Styled.NavTitles>Onde Estamos:</Styled.NavTitles>
            <Styled.NavAdress >
              Travessa Riachuelo 99 Nilópolis-RJ CEP: 26520-590

            </Styled.NavAdress>
          </Styled.NavContainer>
          
          <Styled.NavContainer>
            <Styled.AppsContainer>
              <Styled.Links
                href="https://m.uber.com/ul/?action=setPickup&client_id=2oF5ktPb2_uSSil-SJyE1_GWuDBQ54-x&pickup=my_location&dropoff[formatted_address]=Minist%C3%A9rio%20LOUDDI%20Nil%C3%B3polis%20-%20Travessa%20Riachuelo%20-%20Centro%2C%20Nil%C3%B3polis%20-%20RJ%2C%20Brasil&dropoff[latitude]=-22.813384&dropoff[slongitude]=-43.424639
"
                target="_blank"
              >
                <Styled.AppsImages src="/images/Uber.png" alt="Uber" />
              </Styled.Links>
              <Styled.Links
              href="https://www.waze.com/en/live-map/directions/br/rj/ministerio-louddi-nilopolis?sjid=1670743611455035439-SA&to=place.ChIJG_xxcjVhmQARbJm4h4OgYWw"
              target="_blank"
              >
                <Styled.AppsImages src="/images/Waze.png" alt="Waze"  />
              </Styled.Links>
              <Styled.Links
                 href="https://goo.gl/maps/AAUUVhdpq4GiTnuFA"
                 target="_blank"
              >
                <Styled.AppsImages src="/images/Maps.png" alt="Maps" />
             
              </Styled.Links>
            </Styled.AppsContainer>
          </Styled.NavContainer>
        </Styled.TopContainer>
        <Styled.BottomContainer><Styled.BottomContainerLink href="https://portifolio-douglassldev.vercel.app/pt  " target="_blank"> © 2023 Douglas Santos Leite.</Styled.BottomContainerLink> </Styled.BottomContainer>
      </Styled.FooterContainer>
    </Styled.Container>
  );
};

export default Footer;
