import NavBar from "./components/navbar";
import Header from "./components/header";
import Experiences from "./components/about";
import Projects from "./components/projects";
import "./App.css";
import Divider from "./components/divider";

function App() {
  return (
    <>
      <NavBar />
      <main className="text-tertiary scroll-smooth">
        <Header />
        <Divider />
        <Experiences />
        <Projects />
      </main>
    </>
  );
}

export default App;
