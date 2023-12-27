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
      <SiReact className="-sky-400" />,
      <SiTailwindcss className="text-cyan-500" />,
      <SiSupabase className="text-emerald-500" />,
      <SiNextdotjs className="text-white" />,
    ],
  },
  {
    title: "Standalone",
    description:
      "Retriever over the over the world system comuninst",
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
      "A minimalistic music app, with elegant design and perspective nghghg ihugyugyhg ijiyuyutu",
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
      className="flex overflow-hidden relative flex-col py-12 items-center justify-center"
    >
      <div className="relative overflow-hidden w-[98%] bg-primary p-6 flex border-b-[4px] shadow-xl border-secondary-shadow rounded-lg items-center justify-content
             after:h-[10%] after:w-full after:bg-red-500 after:absolute after:left-0 after:bottom-0">
        <FaRegCircleDot className="mr-6 text-red-500" />
        <h2 className="text-xl font-bold">
          PROJECTS
        </h2>
      </div>

      <br />

      <div 
        className="flex flex-wrap justify-center gap-9
          after:h-full after:w-[3rem] after:border-l-[5px] after:border-dashed after:border-secondary-shadow after:left-[2.155rem] after:top-[7.9rem] after:absolute">
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
    <article
      className="max-h-[26rem] max-w-[19.2rem] flex relative flex-col gap-[1.25rem] ml-[3.7rem] rounded 
        bg-primary shadow-xl border-b-[6px] border-b-primary-shadow p-5
        after:h-[6px] after:w-20 after:absolute after:border-dashed after:border-t-[5px] after:border-secondary-shadow after:top-[51%] after:left-[-26%]
        before:h-[10px] before:w-[10px] before:absolute before:bg-secondary before:top-[50%] before:left-[-3rem] z-50"
    >
      {/* Top: Image */}
      <div className="h-[48%] overflow-hidden rounded border border-primary-shadow">
        <img className="h-full w-full object-cover" src={img} alt={title} />
      </div>

      {/* Bottom: Content */}
      <div className="grid h-[52%] gap-[1.25rem] grid-cols-[auto_1fr] items-center">
        <RightStackForm stack={stack} />
        <LeftBoxForm title={title} description={desc} />
      </div>
    </article>
  );
}

function LeftBoxForm({ title, description }) {
  return (
    <div className="flex gap-3 h-[100%] flex-col justify-between text-slate-800">
      <h1 className="text-3xl font-bold text-red-500 underlin decoration-slate-800">
        {title}
      </h1>

      <p className="grow overflow-scroll pr-2.5">{description}</p>

      <div className="flex gap-2 justify-end">
        {/* <Button rounded="rounded">
          <RiLinkM className="ml-[-5px] text-lg transition-all group-hover:text-red-500" />
          <span className="mx-1 text-[0.5rem]">|</span>
          Live
        </Button> */}

        <Button rounded="rounded">
          <SiGithub className="transition-all ease-in group-hover:text-red-500" />
          <span className="mx-1 text-[0.5rem]">|</span>
          Github code
        </Button>
      </div>
    </div>
  );
}

function RightStackForm({ stack }: { stack: any }) {
  return (
    <div className="h-full flex items-center">
      <div
        className="flex h-full w-[2.8rem] flex-col items-center justify-center gap-3
          rounded bg-[#2F4858] border-b-[4px] border-slate-800 py-3 text-xl text-white shadow-md"
      >
        {stack}
      </div>
    </div>
  );
}
