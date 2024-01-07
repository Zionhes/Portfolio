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
      <SiTypescript className="text-blue-600" />,
      <SiReact className="text-sky-500" />,
      <SiTailwindcss className="text-cyan-500" />,
      <SiSupabase className="text-emerald-500" />,
      <SiNextdotjs className="text-black" />,
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
      <SiNextdotjs className="text-black" />,
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
      <SiNextdotjs className="text-black" />,
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto mt-10 w-full overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-opacity-40"
    >
      <div
        className="justify-content relative flex w-full items-center overflow-hidden border-b-[4px] border-secondary-shadow bg-primary p-6 shadow
             after:absolute after:bottom-0 after:left-0 after:h-[10%] after:w-full after:bg-red-500 after:shadow-xl"
      >
        <FaRegCircleDot className="mr-6 text-red-500" />
        <h2 className="text-xl font-bold">PROJECTS</h2>
      </div>
      {/* Container */}
      <div className="bg-primary px-6 py-3">
        {projects.map((p) => (
          <article className="group relative py-6 pl-8 sm:pl-32">
            {/* Vertical line */}
            <div
              className="mb-1 flex flex-col items-start before:absolute 
                before:left-[0.47rem] before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-red-400 before:px-px before:shadow-xl 
                after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-secondary after:bg-primary after:shadow-xl group-last:before:hidden sm:flex-row sm:before:ml-[6rem] sm:after:left-0 sm:after:ml-[6.5rem]"
            >
              {/* Title and Stack */}
              <div className="left-0 inline-flex h-auto w-full -translate-y-2 items-center justify-between overflow-hidden py-1 text-2xl sm:absolute sm:mb-0">
                <h2 className="text-2xl font-bold italic sm:mb-0">
                  {p.title}
                </h2>
              </div>
              <div className="mb-3 flex gap-3 text-lg">{p.stack}</div>
            </div>

            {/* Description */}
            <p className="">{p.description}</p>

            <div className="">
              <img
                className="mt-3 h-full w-full rounded object-cover"
                src={p.image}
                alt={p.title}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
