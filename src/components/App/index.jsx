import { Container } from "./style";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";

export function App() {
  return (
    <Container>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>DADOS EPIDEMIOLOGICOS NASCIDOS VIVOS</p>
      </footer>
    </Container>
  );
}
