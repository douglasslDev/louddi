import Header from "@/components/Header/header";
import * as Styled from "./../styles/Home"

const Home: React.FC = () => {
  return (
    <>
     <Header />
      <main className="flex min-h-screen flex-col ">
      <Styled.Welcome>
        <Styled.Tittle>Seja bem vindo</Styled.Tittle>
        <Styled.Text>
          “Pois vocês são salvos pela graça, por meio da fé, e isto não vem de
          vocês, é dom de Deus; não por obras, para que ninguém se glorie.”{" "}
          <p />
          Efésios 2.8-9
        </Styled.Text>
      </Styled.Welcome>
     
       
      </main>
    </>
  );
};
export default Home;
