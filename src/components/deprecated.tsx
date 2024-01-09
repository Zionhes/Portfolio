import { FaLayerGroup } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
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
    description: "Retriever over the over the world system comuninst",
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

export default function D() {
  const [elementRef, intersecting] = useIntersection({ threshold: 0.2 });

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center overflow-hidden py-12"
    >
      <div
        className="justify-content relative flex w-full items-center overflow-hidden border-b-[4px] border-secondary-shadow bg-primary p-6 shadow-xl
             after:absolute after:bottom-0 after:left-0 after:h-[10%] after:w-full after:bg-red-500"
      >
        <FaRegCircleDot className="mr-6 text-red-500" />
        <h2 className="text-xl font-bold">PROJECTS</h2>
      </div>

      <br />

      <div
        className="flex flex-wrap justify-center gap-9
          after:absolute after:left-[1.9rem] after:top-[7.9rem] after:h-full after:w-[1rem] after:border-l-[3px] after:border-dashed after:border-secondary-shadow"
      >
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
      className="relative z-50 ml-[3.7rem] flex max-h-[26rem] max-w-[19.2rem] flex-col gap-[1.25rem] 
        rounded border-b-[6px] border-b-primary-shadow bg-primary p-5
        shadow-xl before:absolute before:left-[-3rem] before:top-[50%] before:h-[10px] before:w-[10px] before:bg-secondary after:absolute
        after:left-[0%] after:top-[51%] after:h-[6px] after:w-20 after:border-t-[3px] after:border-dashed after:border-secondary-shadow"
    >
      {/* Top: Image */}
      <div className="h-[48%] overflow-hidden rounded border border-primary-shadow">
        <img className="h-full w-full object-cover" src={img} alt={title} />
      </div>

      {/* Bottom: Content */}
      <div className="grid h-[52%] grid-cols-[auto_1fr] items-center gap-[1.25rem]">
        <RightStackForm stack={stack} />
        <LeftBoxForm title={title} description={desc} />
      </div>
    </article>
  );
}

function LeftBoxForm({ title, description }) {
  return (
    <div className="flex h-[100%] flex-col justify-between gap-3 text-slate-800">
      <h1 className="underlin text-3xl font-bold text-red-500 decoration-slate-800">
        {title}
      </h1>

      <p className="grow overflow-scroll pr-2.5">{description}</p>

      <div className="flex justify-end gap-2">
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
    <div className="flex h-full items-center">
      <div
        className="flex h-full w-[2.8rem] flex-col items-center justify-center gap-3
          rounded border-b-[4px] border-slate-800 bg-[#2F4858] py-3 text-xl text-white shadow-md"
      >
        {stack}
      </div>
    </div>
  );
}
