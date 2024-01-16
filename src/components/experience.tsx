import { m } from "framer-motion";
import { GiEgyptianBird } from "react-icons/gi";
import HeaderTitle from "./header-title";

export default function Experiences() {
  return (
    <section id="experience" className="bg-3 bg-[#E7A075] py-16 lg:p-8">
      <div className="mx-auto w-[96%] sm:w-[570px] md:w-[670px] lg:w-[90%]">
        <HeaderTitle>
          <GiEgyptianBird className="mr-[1.05rem] text-[1.8rem] text-red-500 
            sm:text-4xl
            lg:ml-[1.4rem]" />
          <h2 className="text-xl font-bold mt-1 md:text-2xl">
            EXPERIENCE
          </h2>
        </HeaderTitle>

        <main
          className="relative mx-auto mt-[-3.5px] flex w-[95%] flex-col items-center gap-4 overflow-hidden border-x border-teal-300/30 bg-teal-500/25 p-4 shadow-1
            sm:w-[93%] sm:gap-8 sm:p-8
            lg:gap-8 lg:p-4 lg:flex-row lg:w-[95%] lg:h-[28rem]"
        >
          <m.article
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", bounce: 0.6, duration: 0.35 }}
            className="relative rounded-xl border-b-[6px] border-primary-shadow bg-primary p-11 shadow-2
              lg:border-b-8 lg:p-8 lg:h-full"
          >
            <h3 className="font-bold sm:text-xl lg:text-xl">
              <span className="text-red-500">Front-End Developer</span> •
              Alcaldía Bolivariana del Municipio Ribero
            </h3>
            <p className="mt-2 text-[0.85rem] font-light sm:text-normal lg:text-base">
              Jun 2022 - Dic 2023 | Comunication and Information deparment
            </p>
            <br />
            <ul className="flex list-inside list-disc flex-col gap-5 marker:text-red-500 sm:text-lg lg:text-normal-big">
              <li className="decoration-red-500">
                Administration Dashboard migrated from vanilla HTML, CSS and JS
                to React, for the management of personal and services daily
                performed by the organization.
              </li>
              <li>
                Designing a user interface from scratch and implementing it in a
                web interface using TailwindCSS.
              </li>
            </ul>
          </m.article>

          <div className="flex flex-col gap-5 h-full">
          <m.article
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", bounce: 0.6, duration: 0.35 }}
            className="rounded-xl border-b-[6px] border-primary-shadow bg-primary p-[2.7rem] shadow-2
              lg:border-b-8 lg:p-8 lg:h-full"
          >
            <h3 className="font-bold sm:text-xl lg:text-xl">
              <span className="text-red-500">Full-stack COO</span> • Alcaldía
              Bolivariana del Municipio Ribero
            </h3>
            <p className="mt-2 text-[0.85rem] font-light sm:text-normal lg:text-base">
              Oct 2023 - Dic 2023 | Technological Development Department
            </p>
            <br />
            <ul className="flex list-inside list-disc flex-col gap-5 marker:text-red-500 sm:text-lg lg:text-normal-big">
              <li>
                Designing and deployment of a web application from scratch
                written in React, Tailwind, Next.Js and PostgreSQL for tax
                managment of merchants in the region.
              </li>
            </ul>
          </m.article>

          <m.article
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", bounce: 0.6, duration: 0.35 }}
            className="rounded-xl items-center border-b-[6px] hidden font-bold border-primary-shadow bg-primary shadow-2 text-xl
              lg:border-b-8 lg:px-8 lg:h-full lg:w-full lg:flex"
          >
            <p className="">
              <span className="text-red-500 my-auto">Coming</span> soon...
            </p>
          </m.article>
          </div>
        </main>
        <HeaderTitle height="h-[85px] lg:h-[80px]" />
      </div>
    </section>
  );
}
