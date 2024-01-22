import { m } from "framer-motion";
import { GiEgyptianBird } from "react-icons/gi";
import HeaderTitle from "./header-title";

export default function Experiences() {
  return (
    <section id="experience" className="bg-2 py-10">
      <div className="mx-auto h-full w-[95%] sm:w-[85%] lg:w-[85%]">
        <HeaderTitle>
          <GiEgyptianBird className="mr-[1.05rem] text-[1.8rem] text-secondary lg:ml-[1.4rem]" />
          <h2 className="mt-1 text-xl font-bold md:text-2xl">EXPERIENCE</h2>
        </HeaderTitle>

        {/* Container */}
        <main
          className="shadow-1 relative mx-auto mt-[-0.2rem] flex w-[95%] flex-col items-center gap-4 overflow-hidden border-x border-teal-300/30 bg-teal-500/25 p-4
            lg:w-[95%] lg:grow lg:flex-row lg:items-stretch lg:gap-8 lg:p-8"
        >
          <m.article
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", bounce: 0.6, duration: 0.35 }}
            className="shadow-2 rounded-xl border-b-[0.4rem] border-primary-shadow bg-primary p-11
              lg:border-b-8 lg:p-8 lg:py-10 2xl:p-12"
          >
            <h3 className="font-bold lg:text-xl 2xl:text-2xl">
              <span className="text-secondary">Front-End Developer</span> •
              At Municipality of Ribero, Venezuela.
            </h3>
            <p className="mt-2 text-[0.85rem] font-light lg:text-base 2xl:text-lg">
              Jun 2022 - Dic 2023 | Comunication and Information deparment.
            </p>
            <br />
            <ul className="lg:text-normal-big flex list-inside list-disc flex-col gap-5 marker:text-secondary 2xl:text-xl">
              <li className="decoration-secondary">
                Administration Dashboard migrated from vanilla HTML, CSS and JS
                to React.               
              </li>
              <li>
                UI rearranged from scratch and implemented with TailwindCSS for the management of personal and services daily performed by the organization.
              </li>
            </ul>
          </m.article>

          {/* Second Container */}
          <div className="flex flex-col justify-between gap-8">
            <m.article
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", bounce: 0.6, duration: 0.35 }}
              className="shadow-2 rounded-xl border-b-[0.4rem] border-primary-shadow bg-primary p-[2.7rem]
              lg:h-full lg:border-b-8 lg:p-8 lg:py-10 2xl:p-12"
            >
              <h3 className="font-bold lg:text-xl 2xl:text-2xl">
                <span className="text-secondary">Full-Stack Developer</span> •
                At Municipality of Ribero, Venezuela
              </h3>
              <p className="mt-2 text-[0.85rem] font-light lg:text-base 2xl:text-lg">
                Oct 2023 - Dic 2023 | Technological Development department.
              </p>
              <br />
              <ul className="lg:text-normal-big flex list-inside list-disc flex-col gap-5 marker:text-secondary 2xl:text-xl">
                <li>
                  Design and implementation from scratch of a web application for tax managment of merchants in the region, using React, Tailwind CSS, Next.Js and PostgreSQL.
                </li>
              </ul>
            </m.article>

            <m.article
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", bounce: 0.6, duration: 0.35 }}
              className="shadow-2 hidden items-center rounded-xl border-b-[0.4rem] border-primary-shadow bg-primary text-xl font-bold
              lg:flex lg:w-full lg:border-b-8 lg:px-8 lg:py-4 2xl:py-5"
            >
              <p className="">
                <span className="my-auto text-secondary">Coming</span> soon...
              </p>
            </m.article>
          </div>
        </main>
        <HeaderTitle />
      </div>
    </section>
  );
}
