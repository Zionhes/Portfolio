import p1 from "../assets/p1.jpg";

import { GiEgyptianTemple } from "react-icons/gi";
import { GiEgyptianSphinx } from "react-icons/gi";

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
    image: p1,
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

import { PiHandTapDuotone } from "react-icons/pi";
import HeaderTitle from "./header-title";

export default function Projects() {
  return (
    <section id="projects" className="custom-bg-5 mx-auto w-full pt-16">
      <div className="mx-auto h-full pb-10 md:w-[945px]">
        <HeaderTitle>
          <GiEgyptianSphinx className="mr-6 text-[1.8rem] text-red-500" />
          <h2 className="text-xl font-bold">PROJECTS</h2>
        </HeaderTitle>

        <div className="relative mt-6 flex flex-col gap-10">
          <article className="peer relative mx-auto h-auto w-[90%]">
            <img
              className="mx-auto mt-3 h-full w-[99.5%] rounded-t object-cover peer-hover:bg-black"
              src={projects[0].image}
              alt={projects[0].title}
            />
            <PiHandTapDuotone className="absolute bottom-10 right-14 rotate-[-45deg] text-4xl text-white" />
            <div
              className="noise justify-content relative flex h-10 w-full items-center overflow-hidden rounded border-b-[3px] border-secondary-shadow bg-primary px-6 py-2 shadow-md
             before:absolute before:bottom-0 before:left-0 before:h-[9%] before:w-full before:bg-red-500 before:content-[''] after:absolute
             after:left-0 after:top-0 after:h-[15%] after:w-full after:border-b-[2px] after:border-secondary-shadow after:bg-red-500"
            >
              {/* <GiEgyptianSphinx className="mr-6 text-[1.8rem] text-red-500" /> */}
              <div className="flex w-full items-center justify-between">
                <h1 className="font-bold">Music App</h1>
                <div className="flex gap-2 rounded bg-tertiary p-1 text-sm">
                  {projects[0].stack.map((s) => s)}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
