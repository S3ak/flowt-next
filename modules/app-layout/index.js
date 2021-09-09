import AppContainer from "../../components/app-container";
import Header from "../../components/header";
import NavBar from "../../features/nav-bar";
import Main from "../../components/main";
import Footer from "../../components/footer";
import AppBar from "../../features/app-bar";

export default function AppLayout({ children }) {
  return (
    <AppContainer>
      <Header>
        <NavBar />
      </Header>

      <Main>{children}</Main>

      <Footer>
        <AppBar />
      </Footer>
    </AppContainer>
  );
}
