import { m } from "framer-motion";
import { GiEgyptianSphinx } from "react-icons/gi";
import { HiOutlineExternalLink } from "react-icons/hi";

import HeaderTitle from "./header-title";

type Data = {
  title: string;
  description: string;
  image: string;
  stack: string[][];
  urlView: string;
  urlGithub: string;
};

export default function Projects({ projects }: { projects: Data[] }) {
  return (
    <section id="projects" className="bg-2 mx-auto bg-[#CD7659]/90 py-16 lg:p-8">
      <div className="mx-auto flex w-[100%] flex-col items-center justify-center sm:w-[570px] md:w-[670px] lg:w-[90%]">
        {/* Header */}
        <HeaderTitle>
          <GiEgyptianSphinx className="mr-[1.05rem] text-[1.8rem] text-red-500 lg:ml-[1.4rem] lg:text-[2.5rem]" />
          <h2 className="text-xl font-bold lg:mt-1 lg:text-[1.6rem]">
            PUBLIC PROJECTS
          </h2>
        </HeaderTitle>
        <div className="border- b-teal-400/30 flex w-[90%] justify-center border-teal-300/20 lg:w-full">
          {/* Projects container */}
          <main
            className="mt-[-3.5px] flex w-full flex-col items-center gap-8 border-teal-300/30 py-8
              lg:flex-row
            "
          >
            {projects.map((project) => (
              <Item project={project} />
            ))}
          </main>
          {/*
        <HeaderTitle height="h-[90px] lg:h-[95px]" />
        */}
        </div>
        {/*
        <HeaderTitle height="h-[85px] lg:h-[95px]" />
        */}
      </div>
    </section>
  );
}

function Item({ project }: { project: Data }) {
  return (
    <m.article
      className="relative flex w-full flex-col overflow-hidden rounded-xl rounded-t-lg border-b-4 border-b-secondary-shadow shadow-2xl
        lg:w-[32%]

      "
    >
      {/* Image container*/}
      <a
        className="mx-auto h-64 w-full overflow-hidden"
        href={project.urlView}
        aria-label="View of the project"
      >
        {/* Image */}
        <img
          className="h-full w-full overflow-hidden rounded bg-primary object-cover"
          src={project.image}
          alt={project.title}
        ></img>
        <p className="absolute left-[4.6rem] top-28 hidden rounded-lg bg-black/35 px-2 text-xl font-bold text-white group-hover:block">
          Click for view project
        </p>

        {/*
<SimpleButton className="hidden group-hover:block absolute top-40 right-[7rem] px-2 rounded-lg font-bold text-white text-xl">
      Code
</SimpleButton>
<SimpleButton className="hidden group-hover:block absolute top-40 left-[7rem] px-2 rounded-lg font-bold text-white text-xl">
          View
</SimpleButton>
        */}
      </a>

      {/* Content container */}
      <div
        className="rounded- relative -mt-2.5 flex h-auto flex-col gap-4 overflow-hidden rounded-t-lg border-x-4 border-y-[6px] border-t-[2px] border-black/15 border-b-secondary border-t-white/90 bg-primary px-4 pb-4 pt-3
          lg:-mt-3.5 lg:gap-8 lg:p-5
        "
      >
        <div className="flex w-[98%] flex-col justify-center lg:gap-1">
          <header className="flex items-center text-2xl font-bold text-red-500 lg:text-2xl">
            <a
              href="#"
              className="transition-all hover:underline hover:decoration-red-500"
            >
              {project.title}
              <HiOutlineExternalLink className="ml-2 inline" />
            </a>
          </header>
          <main className="lg:text-normal-big grow text-base">
            {project.description}
          </main>
        </div>

        <aside className="justify-en mt-1.5 flex flex-wrap justify-end gap-1.5">
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
      className={`py-0. rounded px-3 text-sm shadow ${tech[1]} border-b-2 ${tech[3]} ${tech[2]} lg:text-normal`}
    >
      <span className="relative top-[0.5px]">{tech[0]}</span>
    </div>
  );
}
