import { FaLayerGroup } from "react-icons/fa";
import { RiLinkM, RiPagesFill } from "react-icons/ri";
import {
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiSupabase,
  SiNextdotjs,
  SiGithub,
} from "react-icons/si";

import useIntersection from "../hooks/useIntersection";

import Button from "./button";

const projects = [
  {
    title: "Music App",
    description:
      "A minimalistic music app, with elegant design and perspective",
    image:
      "https://s3-alpha.figma.com/hub/file/1392024499/8880c4df-f088-43af-b98a-89a3689c3d15-cover.png",
    stack: [
      <SiTypescript className="text-blue-500" />,
      <SiReact className="text-sky-400" />,
      <SiTailwindcss className="text-cyan-500" />,
      <SiSupabase className="text-emerald-500" />,
      <SiNextdotjs className="text-white" />,
    ],
  },
  {
    title: "Music App",
    description:
      "A minimalistic music app, with elegant design and perspective",
    image:
      "https://s3-alpha.figma.com/hub/file/1392024499/8880c4df-f088-43af-b98a-89a3689c3d15-cover.png",
    stack: [
      <SiTypescript className="text-blue-500" />,
      <SiReact className="text-sky-400" />,
      <SiTailwindcss className="text-cyan-500" />,
      <SiSupabase className="text-emerald-500" />,
      <SiNextdotjs className="text-white" />,
    ],
  },
  {
    title: "Music App",
    description:
      "A minimalistic music app, with elegant design and perspective nghghg ihugyugyhg ijiyuyutuyt hhfgh hfg hfh hfytyty",
    image:
      "https://img.freepik.com/free-vector/flat-design-ui-ux-landing-page_52683-72187.jpg",
    stack: [
      <SiTypescript className="text-blue-500" />,
      <SiReact className="text-sky-400" />,
      <SiTailwindcss className="text-cyan-500" />,
      <SiSupabase className="text-emerald-500" />,
      <SiNextdotjs className="text-white" />,
    ],
  },
];

export default function Projects() {
  const [elementRef, intersecting] = useIntersection({ threshold: 0.2 });

  return (
    <section
      id="projects"
      className="flex h-fit w-full py-12 items-center justify-center text-slate-800"
    >
      <div
        className={`flex h-full p-4 w-[95%] rounded-xl shadow
          transition-all ease-in border border-slate-800
          ${intersecting ? "bg-[#ebe6d3]" : "bg-slate-800"}`}
        ref={elementRef}
      >
        <div
          className={`w-full transition-all duration-300 ${
            intersecting ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="p-4 bg-amber-50 text-xl rounded-lg border border-slate-800 shadow
            font-bold text-red-500 min-[440px]:text-2xl md:text-3xl">
            <FaLayerGroup className="inline-block mr-4 text-slate-800 text-3xl" />
            PROJECTS
          </h1>

          <div className="flex flex-wrap justify-center gap-9 py-10">
            {projects.map((p) => (
              <Card
                img={p.image}
                title={p.title}
                desc={p.description}
                stack={p.stack}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ img, title, desc, stack }) {
  return (
    <div
      className="max-h-[25rem] min-h-[25rem] max-w-[90%] overflow-hidden 
        rounded-lg bg-amber-50 shadow border border-slate-800"
    >
      {/* Top: Image */}
      <div className="h-1/2 overflow-hidden rounded-b-lg border border-slate-800 shadow-md">
        <img className="h-full w-full object-cover" src={img} alt={title} />
      </div>

      {/* Bottom: Content */}
      <div className="grid h-1/2 grid-cols-[1fr_auto] items-center px-5">
        <LeftBoxForm title={title} description={desc} />
        <RightStackForm stack={stack} />
      </div>
    </div>
  );
}

function LeftBoxForm({ title, description }) {
  return (
    <div className="flex gap-3 h-[84%] flex-col justify-between text-slate-800">
      <h1 className="text-3xl font-bold text-red-500 underline decoration-slate-800">
        {title}
      </h1>

      <p className="grow overflow-scroll pr-2.5">{description}</p>

      <div className="flex gap-2">
        <Button>
          <SiGithub className="transition-all ease-in group-hover:text-red-500" />
          <span className="mx-1 text-[0.5rem]">|</span>
          Github
        </Button>

        <Button>
          <RiLinkM className="ml-[-5px] text-lg transition-all group-hover:text-red-500" />
          <span className="mx-1 text-[0.5rem]">|</span>
          Live
        </Button>
      </div>
    </div>
  );
}

function RightStackForm({ stack }: { stack: any }) {
  return (
    <div
      className="flex h-[85%] flex-col items-center justify-center gap-3
          rounded-lg bg-slate-800 px-2 py-3 text-xl text-white shadow"
    >
      {stack}
    </div>
  );
}
