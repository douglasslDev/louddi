"use client";

import Header from "@/components/Header/header";
import * as Styled from "./../styles/Home";
import Footer from "@/components/Footer/footer";
import Slideshow from "@/components/Carousel/carousel";

const Home: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
const data =[
 {
  dia:"QUA",
  culto:"Culto de oração e ensino",
  horario:"20h",
 },
 {
  dia:"DOM",
  culto:"Escola Biblíca Dominical",
  horario:"20h",
 },
 {
  dia:"DOM",
  culto:"Culto de Celebração",
  horario:"18h",
 },
]

  return (
    <>
      <Header />

      <main className="flex min-h-screen flex-col ">

     

<Styled.OurCultsSection id="Eventos">
<Styled.TitleOurCultsSection>Nossos Cultos</Styled.TitleOurCultsSection>      
<Styled.CultsContainer >
        {data.map((item, index) => (
        <div key={index}>

          <Styled.DescripitionCultsContainer >
    <Styled.TittleDescripitionCults>{item.dia}</Styled.TittleDescripitionCults>
    <Styled.DescriptionCults>
    <Styled.SubTittleDescripitionCults>{item.culto}</Styled.SubTittleDescripitionCults>
    <Styled.TextDescripitionCults>{item.horario}</Styled.TextDescripitionCults>
    </Styled.DescriptionCults>
    
          </Styled.DescripitionCultsContainer>
          <Styled.LineHorizontal/>
          </div>

        ))}
  </Styled.CultsContainer>
      </Styled.OurCultsSection >


        <Slideshow />
     
        <Styled.WhoWeAre id="whoweare">
          <Styled.WhoWeAreTitle>Quem Somos</Styled.WhoWeAreTitle>
          <Styled.WhoWeAreImage src="./images/WhoWeAre2.jpg" />
          <Styled.WhoWeAreText>
            Em breve haverá mais detalhes sobre a história do Ministério Louddi
          </Styled.WhoWeAreText>
          <Styled.WhoAreSubText>
            ...a fim de que sejas para salvação até os confins da terra Atos
            13:47
          </Styled.WhoAreSubText>
        </Styled.WhoWeAre>
        <Styled.SocialMediaContainer id="SocialMedia">
          <Styled.SocialMediaTitle>
            Siga-nos nas redes sociais
          </Styled.SocialMediaTitle>
          <Styled.SocialMediaText>
            Siga nossas redes sociais para ser notificado a respeito de cultos,
            conferências, reuniões e sermões disponíveis para a sua edificação.
          </Styled.SocialMediaText>
          <Styled.SocialMediaImagesContainer>
            <Styled.IconsLinks
              href="https://www.instagram.com/ministerio_louddi/"
              target="_blank"
            >
              <Styled.IconInstagram />
            </Styled.IconsLinks>
            <Styled.IconsLinks href="#" target="_blank">
              <Styled.IconFacebook />
            </Styled.IconsLinks>
            <Styled.IconsLinks href="#" target="_blank">
              <Styled.IconYoutube />
            </Styled.IconsLinks>
          </Styled.SocialMediaImagesContainer>
        </Styled.SocialMediaContainer>
        <Styled.Location id="location">
          <Styled.BackgroundLocationContainer>
            <Styled.LocationSubTitle>Navegue até aqui</Styled.LocationSubTitle>

            <Styled.LocationAppsContainer>
              <Styled.AppsLinks
                href="https://m.uber.com/ul/?action=setPickup&client_id=2oF5ktPb2_uSSil-SJyE1_GWuDBQ54-x&pickup=my_location&dropoff[formatted_address]=Minist%C3%A9rio%20LOUDDI%20Nil%C3%B3polis%20-%20Travessa%20Riachuelo%20-%20Centro%2C%20Nil%C3%B3polis%20-%20RJ%2C%20Brasil&dropoff[latitude]=-22.813384&dropoff[longitude]=-43.424639
"
                target="_blank"
              >
                <Styled.AppsImages src="/images/Uber.png" alt="Uber" />
              </Styled.AppsLinks>
              <Styled.AppsLinks
                href="https://www.waze.com/en/live-map/directions/br/rj/ministerio-louddi-nilopolis?sjid=1670743611455035439-SA&to=place.ChIJG_xxcjVhmQARbJm4h4OgYWw"
                target="_blank"
              >
                <Styled.AppsImages src="/images/Waze.png" alt="Waze" />
              </Styled.AppsLinks>
              <Styled.AppsLinks
                href="https://goo.gl/maps/AAUUVhdpq4GiTnuFA"
                target="_blank"
              >
                <Styled.AppsImages src="/images/Maps.png" alt="Maps" />
              </Styled.AppsLinks>
            </Styled.LocationAppsContainer>
            <Styled.LocationTitle>Endereço:</Styled.LocationTitle>

            <Styled.Adress>
              Travessa Riachuelo 99, Nilópolis-RJ CEP: 26520-590
            </Styled.Adress>
          </Styled.BackgroundLocationContainer>
        </Styled.Location>
        <Styled.CollaborateContainer id="collaborate">
          <Styled.Collaborate>Contribua nesta Obra</Styled.Collaborate>
          <Styled.PixContainer>
            <Styled.PixLogo src="/images/pix2.png" alt="LogoPix" />
            <Styled.PixQrCode src="/images/QrCode.png" alt="QrCode" />
          </Styled.PixContainer>
          <Styled.CollaborateTextdDescription>
            Razão Social
          </Styled.CollaborateTextdDescription>
          <Styled.CollaborateTextdInformation>
            Ministério Louvor ao Deus de Israel LOUDDI
          </Styled.CollaborateTextdInformation>
          <Styled.CollaborateTextdDescription>
            Chave pix CNPJ
          </Styled.CollaborateTextdDescription>
          <Styled.CollaborateTextdInformation>
            48.705.282.0001-59
          </Styled.CollaborateTextdInformation>
          <Styled.CollaborateTextdDescription>
            Banco
          </Styled.CollaborateTextdDescription>
          <Styled.CollaborateTextdInformation>
            Itaú Unibanco S.A
          </Styled.CollaborateTextdInformation>
          <Styled.BankContainer>
            <Styled.Bank>
              <Styled.CollaborateTextdDescription>
                Agência
              </Styled.CollaborateTextdDescription>
              <Styled.CollaborateTextdInformation>
                5655
              </Styled.CollaborateTextdInformation>
            </Styled.Bank>
            <Styled.Bank>
              <Styled.CollaborateTextdDescription>
                Conta Corrente
              </Styled.CollaborateTextdDescription>
              <Styled.CollaborateTextdInformation>
                99150-2
              </Styled.CollaborateTextdInformation>
            </Styled.Bank>
          </Styled.BankContainer>
        </Styled.CollaborateContainer>
        <Styled.BottonTop>
          <Styled.LinkToTop href="#">
            <Styled.Seta />
          </Styled.LinkToTop>
        </Styled.BottonTop>
        <Footer />
      </main>
    </>
  );
};
export default Home;
