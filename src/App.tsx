import { LazyMotion, domAnimation } from "framer-motion";
import { GiFlyingBeetle, GiEgyptianWalk } from "react-icons/gi";

import NavBar from "./components/Navbar";
import Main from "./components/main";
import Header from "./components/header";
import Experiences from "./components/experience";
import Projects from "./components/projects";
import About from "./components/about";
import Footer from "./components/footer";
import Divider from "./components/divider";
import { data as publicProjectsData } from "./public-projects-data"
import "./App.css";

function App() {
  return (
    <>
      <LazyMotion features={domAnimation} strict>
        <NavBar />
        <Main>
          <Header />
          <Divider />
          <Experiences />
          <Divider svg={<GiFlyingBeetle className="text-3xl text-white" />} />
          <Projects projects={publicProjectsData} />
          <Divider svg={<GiEgyptianWalk className="text-3xl text-white" />} />
          <About />
          <Footer />
        </Main>
      </LazyMotion>
    </>
  );
}

export default App;
