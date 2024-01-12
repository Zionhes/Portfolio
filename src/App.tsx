import { LazyMotion, domAnimation } from "framer-motion";
import { GiFlyingBeetle, GiEgyptianWalk } from "react-icons/gi";

import NavBar from "./components/Navbar";
import Header from "./components/header";
import Experiences from "./components/experience";
import Projects from "./components/projects";
import Divider from "./components/divider";

import "./App.css";
import Footer from "./components/footer";
import About from "./components/about";
import Main from "./components/main";

import p1 from "./assets/p1.jpg";

const data = [
  {
    title: "Music App",
    description:
      "A minimalistic responsive music app, with elegant design and perspective made for teach students throught his code",
    image: p1,
    stack: [
      ["TypeScript", "bg-blue-600", "white"],
      ["React", "bg-sky-600", "white"],
      ["Tailwind", "bg-sky-500", "white"],
      ["NextJs", "bg-black", "white"],
      ["Supabase", "bg-teal-500", "white"],
    ],
  },
  {
    title: "Standalone",
    description:
      "A minimalistic responsive music app, with elegant design and perspective made for teach students throught his code",
    image: p1,
    stack: [
      ["TypeScript", "bg-blue-600", "white"],
      ["React", "bg-blue-700", "slate-100"],
      ["Astro", "bg-orange-500", "white"],
    ],
  },
  {
    title: "Destination",
    description:
      "A minimalistic responsive music app, with elegant design and perspective made for teach students throught his code",
    image: p1,
    stack: [
      ["JavaScript", "bg-yellow-400", "slate-900"],
      ["HTML", "bg-orange-500", "slate-100"],
      ["CSS", "bg-blue-700", "white"],
      ["SASS", "bg-red-300", "slate-900"],
    ],
  },
];

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
          <Projects projects={data} />
          <Divider svg={<GiEgyptianWalk className="text-3xl text-white" />} />
          <About />
          <Footer />
        </Main>
      </LazyMotion>
    </>
  );
}

export default App;
