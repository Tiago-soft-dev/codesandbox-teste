import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <>
        <Header />
        <Banner image="home"/>
        <Container>
                  <h1> Hello Word!</h1>
                  <p>Olá mundo estou aprendendo React JS!</p>
        </Container>
       
        <Footer />
    </>
  );
}
