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
    <section id="projects" className="bg-3 mx-auto bg-[#CD7659]/90 py-10">
      <div className="mx-auto flex w-[95%] flex-col items-center justify-center lg:w-[90%]">
        {/* Header */}
        <HeaderTitle>
          <GiEgyptianSphinx className="mr-[1.05rem] text-[1.8rem] text-secondary lg:ml-[1.4rem] lg:text-[2.5rem]" />
          <h2 className="text-xl font-bold lg:mt-1 lg:text-[1.6rem]">
            PUBLIC PROJECTS
          </h2>
        </HeaderTitle>
        <div className="relative -mt-[3px] flex w-[95%] justify-center border-x border-x-teal-300/30 bg-teal-400/30 lg:w-[97%]">
          {/* Projects container */}
          <main
            className="mt-[-3.5px] flex w-full flex-col flex-wrap items-center justify-center gap-8 border-teal-300/30 p-4
              sm:flex-row sm:items-center sm:justify-normal sm:gap-5 sm:p-5
              md:gap-6
              lg:gap-8 lg:p-8"
          >
            {projects.map((project) => (
              <Item project={project} />
            ))}
          </main>
        </div>
        <HeaderTitle />
      </div>
    </section>
  );
}

function Item({ project }: { project: Data }) {
  return (
    <m.article
      className="shadow-1 relative flex w-[90%] flex-col overflow-hidden rounded-xl rounded-t-lg border-b-4 border-b-secondary-shadow
        sm:h-[22rem] sm:w-[48%]
        md:h-[23rem] md:w-[47.5%]
        lg:h-[26rem] lg:w-[31%]"
    >
      {/* Image container*/}
      <div className="mx-auto h-full w-full overflow-hidden">
        {/* Image */}
        <img
          className="h-full w-full overflow-hidden rounded bg-primary object-cover"
          src={project.image}
          alt={project.title}
        ></img>
        <p className="absolute left-[4.6rem] top-28 hidden rounded-lg bg-black/35 px-2 text-xl font-bold text-white group-hover:block">
          Click for view project
        </p>
      </div>

      {/* Content container */}
      <div
        className="relative -mt-4 flex h-full flex-col justify-between gap-4 overflow-hidden rounded-t-lg border-x-4 border-y-[6px] border-t-[2px] border-black/15 border-b-secondary border-t-white/90 bg-primary px-4 pb-4
          pt-3 lg:-mt-0.5 lg:p-5
        "
      >
        <div className="flex w-[98%] flex-col justify-center lg:gap-1">
          <header className="items-cente flex justify-between text-[1.35rem] font-bold text-secondary lg:text-2xl">
            <a
              href={project.urlView}
              className="transition-all hover:underline hover:decoration-secondary"
              target="_blank"
            >
              {project.title}
              <HiOutlineExternalLink className="mb-0.5 ml-1 inline text-xl" />
            </a>
            <a
              href={project.urlGithub}
              className="transition-all hover:underline hover:decoration-secondary"
              target="_blank"
            >
              Code
            </a>
          </header>
          <main className="lg:text-normal-big grow text-base">
            {project.description}
          </main>
        </div>

        <aside className="flex flex-wrap justify-end gap-1">
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
    <m.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.1 }}
      className={`cursor-default rounded px-3 text-xs shadow ${tech[1]} border-b-2 ${tech[3]} ${tech[2]} xl:text-normal lg:text-sm`}
    >
      <span className="relative">{tech[0]}</span>
    </m.div>
  );
}
