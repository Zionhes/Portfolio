import { m } from "framer-motion";
import { GiEgyptianBird } from "react-icons/gi";
import HeaderTitle from "./header-title";

export default function Experiences() {
  return (
    <section id="experience" className="bg-[#E7A075] py-16">
      <div className="mx-auto w-[96%] sm:w-[570px] md:w-[670px] lg:w-[945px]">
        <HeaderTitle>
          <GiEgyptianBird className="mr-[1.05rem] text-[1.8rem] text-red-500 
            sm:text-4xl
            lg:ml-[1.4rem] lg:text-[2.5rem]" />
          <h2 className="text-xl font-bold mt-1 md:text-2xl lg:text-[1.6rem]">
            EXPERIENCE
          </h2>
        </HeaderTitle>

        <main
          className="relative mx-auto mt-[-3.5px] flex w-[95%] flex-col items-center gap-4 overflow-hidden border-x border-teal-300/30 bg-teal-500/20 p-4 shadow-1
            sm:w-[93%] sm:gap-8 sm:p-8
            lg:gap-16 lg:p-16"
        >
          <m.article
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", bounce: 0.6, duration: 0.35 }}
            className=" rounded-xl border-b-[6px] border-primary-shadow bg-primary p-11 shadow-2
              lg:border-b-8 lg:p-16"
          >
            <h3 className="font-bold sm:text-xl lg:text-2xl lg:mb-1">
              <span className="text-red-500">Front-End Developer</span> •
              Alcaldía Bolivariana del Municipio Ribero
            </h3>
            <p className="mt-2 text-[0.85rem] font-light sm:text-normal lg:text-[1.1rem]">
              Jun 2022 - Dic 2023 | Comunication and Information deparment
            </p>
            <br />
            <ul className="flex list-inside list-disc flex-col gap-5 marker:text-red-500 sm:text-lg lg:text-xl">
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

          <m.article
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", bounce: 0.6, duration: 0.35 }}
            className="rounded-xl border-b-[6px] border-primary-shadow bg-primary p-[2.7rem] shadow-2
              lg:border-b-8 lg:p-[3.3rem]"
          >
            <h3 className="font-bold sm:text-xl lg:text-2xl lg:mb-1">
              <span className="text-red-500">Full-stack COO</span> • Alcaldía
              Bolivariana del Municipio Ribero
            </h3>
            <p className="mt-2 text-[0.85rem] font-light sm:text-normal lg:text-[1.1rem]">
              Oct 2023 - Dic 2023 | Technological Development Department
            </p>
            <br />
            <ul className="flex list-inside list-disc flex-col gap-5 marker:text-red-500 sm:text-lg lg:text-xl">
              <li>
                Designing and deployment of a web application from scratch
                written in React, Tailwind, Next.Js and PostgreSQL for tax
                managment of merchants in the region.
              </li>
            </ul>
          </m.article>
        </main>
        <HeaderTitle height="h-[85px] lg:h-[95px]" />
      </div>
    </section>
  );
}
