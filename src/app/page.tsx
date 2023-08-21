import Header from "@/components/Header/header";
import * as Styled from "./../styles/Home";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col ">
        <Styled.Welcome>
          <Styled.Tittle>Seja bem vindo!</Styled.Tittle>
          <Styled.Text>
            “Pois vocês são salvos pela graça, por meio da fé, e isto não vem de
            vocês, é dom de Deus; não por obras, para que ninguém se glorie.”{" "}
            <p />s Efésios 2.8-9
          </Styled.Text>
        </Styled.Welcome>
        <Styled.WhoWeAre>
          <Styled.WhoWeAreTitle>Quem Somos</Styled.WhoWeAreTitle>
          <Styled.WhoWeAreImage src="./images/WhoWeAre.jpg" />
          <Styled.WhoWeAreText>
            Em breve haverá mais detalhes sobre a história do Ministério Louddi
          </Styled.WhoWeAreText>
          <Styled.WhoAreSubText>
            ...a fim de que sejas para salvação até os confins da terra Atos
            13:47
          </Styled.WhoAreSubText>
        </Styled.WhoWeAre>
        <Styled.collaborate>Colabore</Styled.collaborate>
        <Styled.Location>
          <Styled.BackgroundLocationContainer>
            <Styled.LocationSubTitle>Navegue até aqui</Styled.LocationSubTitle>

            <Styled.LocationAppsContainer>
              <Styled.AppsLinks href="https://m.uber.com/ul/?action=setPickup&client_id=2oF5ktPb2_uSSil-SJyE1_GWuDBQ54-x&pickup=my_location&dropoff[formatted_address]=Minist%C3%A9rio%20LOUDDI%20Nil%C3%B3polis%20-%20Travessa%20Riachuelo%20-%20Centro%2C%20Nil%C3%B3polis%20-%20RJ%2C%20Brasil&dropoff[latitude]=-22.813384&dropoff[longitude]=-43.424639
" target="_blank">
                <Styled.AppsImages src="/images/Uber.png" alt="Uber" />
              </Styled.AppsLinks>
              <Styled.AppsLinks href="https://www.waze.com/en/live-map/directions/br/rj/ministerio-louddi-nilopolis?sjid=1670743611455035439-SA&to=place.ChIJG_xxcjVhmQARbJm4h4OgYWw" target="_blank">
                <Styled.AppsImages src="/images/Waze.png" alt="Waze" />
              </Styled.AppsLinks>
              <Styled.AppsLinks href="https://goo.gl/maps/AAUUVhdpq4GiTnuFA" target="_blank">
                <Styled.AppsImages src="/images/Maps.png" alt="Maps" />
              </Styled.AppsLinks>
            </Styled.LocationAppsContainer>
            <Styled.LocationTitle>Endereço:</Styled.LocationTitle>

            <Styled.Adress>
              Travessa Riachuelo 16, Nilópolis-RJ CEP: 26520-590
            </Styled.Adress>
          </Styled.BackgroundLocationContainer>
        </Styled.Location>
        <Styled.contact>Contato</Styled.contact>
      </main>
    </>
  );
};
export default Home;
