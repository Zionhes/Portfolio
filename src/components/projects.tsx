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
  return (
    <section id="projects" className="bg- mx-auto bg-[#CD7659] p-6">
      {/* Header */}
      <HeaderTitle>
        <GiEgyptianSphinx className="mr-[1.05rem] text-[1.8rem] text-red-500 lg:ml-[1.4rem] lg:text-[2.5rem]" />
        <h2 className="text-xl font-bold lg:mt-1 lg:text-[1.6rem]">
          PUBLIC PROJECTS
        </h2>
      </HeaderTitle>
      <div className="mx-auto flex w-[96%] items-center justify-center lg:w-[945px] xl:w-[1000px]">
        {/* Projects container */}
        <main
          className="mt-[-3.5px] flex w-[95%] flex-col items-center gap-8 border-teal-300/30
            py-8
            lg:mx-0 lg:items-start lg:gap-14 lg:px-14 lg:py-14"
        >
          {projects.map((project) => (
            <Item project={project} />
          ))}
        </main>
        {/*
        <HeaderTitle height="h-[90px] lg:h-[95px]" />
        */}
      </div>
    </section>
  );
}

function Item({ project }: { project: Data }) {
  return (
    <m.article
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", duration: 0.2 }}
      className="flex w-[330px] flex-col overflow-hidden rounded-lg rounded-t-lg border-b-4 border-b-secondary-shadow shadow-2xl
        lg:h-64 lg:w-full lg:flex-row lg:items-center lg:overflow-visible

      "
    >
      {/* Image container*/}
      <div
        className="mx-auto w-full overflow-hidden
        lg:z-30 lg:h-[109%] lg:w-full lg:border-b-[5px] lg:border-secondary lg:border-b-secondary-shadow lg:shadow-xl
        
      "
      >
        {/* Image */}
        <img
          className="h-full w-full overflow-hidden rounded bg-primary object-cover
            lg:border-4 lg:border-secondary lg:shadow-xl
          "
          src={project.image}
          alt={project.title}
        />
      </div>

      {/* Content container */}
      <div
        className="rounded- -mt-2.5 flex h-full flex-col gap-2 overflow-hidden rounded-t-lg border-x-4 border-y-[6px] border-t-[2px] border-black/15 border-b-secondary border-t-white/90 bg-primary px-4 pb-4 pt-3
          lg:-ml-[1rem] lg:mt-0 lg:h-full lg:w-[100%] lg:rounded-l-none lg:border-l-0 lg:p-8
        "
      >
        <header className="text-2xl font-bold text-red-500 lg:text-3xl">
          {project.title}
        </header>
        <main className="grow text-base lg:text-xl">{project.description}</main>
        <aside className="lg: mt-1.5 flex flex-wrap justify-end gap-1.5">
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
      className={`rounded px-3 text-sm shadow-lg ${tech[1]} border-b-2 ${tech[3]} ${tech[2]} lg:text-base`}
    >
      <span className="relative top-[0.3px]">{tech[0]}</span>
    </div>
  );
}
