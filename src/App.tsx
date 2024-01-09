import { GiFlyingBeetle, GiEgyptianWalk } from "react-icons/gi";

import NavBar from "./components/navbar";
import Header from "./components/header";
import Experiences from "./components/experience";
import Projects from "./components/projects";
import Divider from "./components/divider";

import "./App.css";
import Footer from "./components/footer";
import About from "./components/about";
import Main from "./components/main";

function App() {
  return (
    <>
      <NavBar />
      <Main>
        <Header />
        <Divider />
        <Experiences />
        <Divider svg={<GiFlyingBeetle className="text-3xl text-white" />} />
        <Projects />
        <Divider svg={<GiEgyptianWalk className="text-3xl text-white" />} />
        <About />
        <Footer />
      </Main>
    </>
  );
}

export default App;
