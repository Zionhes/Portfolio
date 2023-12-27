import NavBar from "./components/navbar";
import Header from "./components/header";
import Experiences from "./components/about";
import Projects from "./components/projects";

import "./App.css";
export default function App() {
  return (
    <>
      <NavBar />
      <main className="bg-[#5f8e8a] text-tertiary scroll-smooth">
        <Header />
        <Experiences />
        <Projects />
      </main>
    </>
  );
}
