import { GiFlyingBeetle, GiEgyptianWalk } from "react-icons/gi";

import NavBar from "./components/navbar";
import Header from "./components/header";
import Experiences from "./components/experience";
import Projects from "./components/projects";
import Divider from "./components/divider";

import "./App.css";
import Footer from "./components/footer";
import About from "./components/about";


function App() {
  return (
    <>
      <NavBar />
      <main className="text-tertiary scroll-smooth">
        <Header />
        <Divider />
        <Experiences />
        <Divider svg={<GiFlyingBeetle className="text-3xl text-white" /> } />
        <Projects />
        <Divider svg={<GiEgyptianWalk className="text-3xl text-white" /> } />
        <About />
        <Footer />
      </main>
    </>
  );
}

export default App;
