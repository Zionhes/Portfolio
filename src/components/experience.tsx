import { m } from "framer-motion";
import useIntersection from "../hooks/useIntersection";
import { GiEgyptianBird } from "react-icons/gi";
import HeaderTitle from "./header-title";

export default function Experiences() {
  const [elementRef, isIntersecting] = useIntersection({ threshold: 0.2 });

  return (
    <section id="experience" className="bg- py-16 bg-[#E7A075]">
      <div className="mx-auto w-[96%] lg:w-[945px] xl:w-[1000px]">
        <HeaderTitle>
          <GiEgyptianBird className="mr-[1.05rem] text-[1.8rem] text-red-500 lg:ml-[1.4rem] lg:text-[2.5rem]" />
          <h2 className="text-xl font-bold lg:mt-1 lg:text-[1.6rem]">
            EXPERIENCE
          </h2>
        </HeaderTitle>

        <main
          className="relative mx-auto mt-[-3.5px] flex w-[95%] flex-col items-center overflow-hidden border-x border-teal-300/30 bg-teal-500/25 p-4 gap-4
            shadow-xl
            lg:gap-12 lg:p-12 lg:px-32 lg:backdrop-blur-[3px]
         "
        >
          <m.article
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", bounce: 0.6, duration: 0.35  }}
            className=" rounded-xl border-b-[6px] border-primary-shadow bg-primary p-[2.7rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]
              lg:border-b-8 lg:p-16"
          >
            <h3 className="font-bold lg:text-2xl">
              <span className="text-red-500">Front-End Developer</span> •
              Alcaldía Bolivariana del Municipio Ribero
            </h3>
            <p className="mt-2 text-[0.85rem] font-light lg:text-[1rem]">
              Jun 2022 - Dic 2023 | Comunication and Information deparment
            </p>
            <br />
            <ul className="flex list-inside list-disc flex-col gap-5 marker:text-red-500 lg:text-xl">
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
            transition={{ type: "spring", bounce: 0.6, duration: 0.35  }}
            className="rounded-xl border-b-[6px] border-primary-shadow bg-primary p-[2.7rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]
            lg:border-b-8 lg:p-[3.3rem]
            "
          >
            <h3 className="lg:text-2xl font-bold">
              <span className="text-red-500">Full-stack COO</span> • Alcaldía
              Bolivariana del Municipio Ribero
            </h3>
            <p className="mt-2 text-sm font-light lg:text-base">
              Oct 2023 - Dic 2023 | Technological Development Department
            </p>
            <br />
            <ul className="list-inside list-disc marker:text-red-500 lg:text-xl">
              <li>
                Designing and deployment of a web application from scratch
                written in React, Tailwind, Next.Js and PostgreSQL for tax
                managment of merchants in the region.
              </li>
            </ul>
          </m.article>
        </main>
        <HeaderTitle height="h-[95px]" />
      </div>
    </section>
  );
}
