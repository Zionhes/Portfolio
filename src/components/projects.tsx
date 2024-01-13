import { m } from "framer-motion";
import { GiEgyptianSphinx } from "react-icons/gi";

import HeaderTitle from "./header-title";

type Data = {
  title: string;
  description: string;
  image: string;
  stack: string[][];
};

export default function Projects({ projects }: { projects: Data[] }) {
  console.log(projects);
  return (
    <section id="projects" className="bg-2 mx-auto pt-5">
      <HeaderTitle>
        <GiEgyptianSphinx className="mr-6 text-[1.8rem] text-red-500" />
        <h2 className="text-xl font-bold">PUBLIC PROJECTS</h2>
      </HeaderTitle>

      <main className="relative mt-6 flex h-full flex-col items-center justify-center gap-10 p-6 pb-10 md:w-[945px]  ">
        {projects.map((project) => (
          <Item project={project} />
        ))}
      </main>
    </section>
  );
}

function Item({ project }: { project: Data }) {
  return (
    <m.article className="flex w-[330px] flex-col overflow-hidden rounded-lg rounded-t-lg border-b-4 border-b-secondary-shadow bg-primary shadow-2xl">
      <img
        className="mx-auto h-full w-full rounde overflow-hidden object-cover borde-4 border-black/15 bg-primary"
        src={project.image}
        alt={project.title}
      />
      <div className="rounded- -mt-2.5 flex h-full flex-col gap-2 overflow-hidden rounded-t-lg border-x-4 border-y-[6px] border-t-[2px] border-black/15 border-b-secondary border-t-white/90 bg-primary px-4 pb-4 pt-3">
        <header className="text-2xl font-bold text-red-500">
          {project.title}
        </header>
        <main className="text-base">{project.description}</main>
        <aside className="mt-1.5 flex flex-wrap justify-end gap-1.5">
          {project.stack.map((tech) => (
            <Pill tech={tech} />
          ))}
        </aside>
      </div>
    </m.article>
  );
}

function Pill({ tech }) {
  return (
    <div
      className={`rounded px-3 text-sm ${tech[1]} border-b-2 ${tech[3]} ${tech[2]}`}
    >
      <span className="relative top-[0.3px]">{tech[0]}</span>
    </div>
  );
}
