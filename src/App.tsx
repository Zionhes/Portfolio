import NavBar from "./components/navbar";
import Header from "./components/header";
import Experiences from "./components/about";
import Projects from "./components/projects";

import "./App.css";
//#8bb29c
export default function App() {
  return (
    <>
      <NavBar />
      <main className="bg-[#5f8e8a] text-tertiary">
        <Header />
        <Experiences />
        <Projects />
      </main>
    </>
  );
}
