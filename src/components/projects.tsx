import { FaLayerGroup } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6"
import { RiLinkM } from "react-icons/ri";
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
      className="flex flex-col py-12 items-center justify-center"
    >
      <div className="bg-primary w-full p-6 flex border-b-4 border-primary-shadow items-center justify-end">
        <h1 className="text-xl font-bold">
          PROJECTS
        </h1>
        <FaRegCircleDot className="ml-6 text-red-500" />
      </div>

      <br />

      <div className="flex flex-wrap bg-primar justify-center gap-9 py-10">
        {projects.map((p) => (
          <Card
            img={p.image}
            title={p.title}
            desc={p.description}
            stack={p.stack}
          />
        ))}
      </div>

    </section>
  );
}

function Card({ img, title, desc, stack }) {
  return (
    <div
      className="max-h-[25rem] max-w-sm overflow-hidden 
        rounded-lg bg-primary shadow-lg border-b-4 border-primary-shadow"
    >
      {/* Top: Image */}
      <div className="h-1/2 overflow-hidden rounded-b-lg shadow-lg">
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
