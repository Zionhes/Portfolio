import useIntersection from "../hooks/useIntersection";
import { GiEgyptianBird } from "react-icons/gi";
import HeaderTitle from "./header-title";

export default function Experiences() {
  const [elementRef, isIntersecting] = useIntersection({ threshold: 0.2 });

  return (
    <section id="experience" className="bg-3 py-16">
      <div className="mx-auto w-[96%] lg:w-[945px]">
        <HeaderTitle>
          <GiEgyptianBird className="mr-[0.85rem] text-[1.8rem] text-red-500" />
          <h2 className="text-xl font-bold">EXPERIENCE</h2>
        </HeaderTitle>

        <main
          className="relative mx-auto mt-[-3.5px] flex w-[95%] flex-col items-center overflow-hidden border-x border-teal-300/30 bg-teal-500/25 p-4
         "
        >
          <article className=" rounded-xl border-b-[6px] border-primary-shadow bg-primary p-[2.7rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h3 className="font-bold">
              <span className="text-red-500">Front-End Developer</span> •
              Alcaldía Bolivariana del Municipio Ribero
            </h3>
            <p className="mt-2 text-[0.85rem] font-light">
              Jun 2022 - Dic 2023 | Comunication and Information deparment
            </p>
            <br />
            <ul className="flex flex-col gap-5 list-inside list-disc marker:text-red-500">
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
          </article>

          <br />

          <article className="rounded-xl border-b-[6px] border-primary-shadow bg-primary p-[2.7rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h3 className="font-bold">
              <span className="text-red-500">Full-stack COO</span> • Alcaldía
              Bolivariana del Municipio Ribero
            </h3>
            <p className="mt-2 text-sm font-light">
              Oct 2023 - Dic 2023 | Technological Development Department
            </p>
            <br />
            <ul className="list-inside list-disc marker:text-red-500">
              <li>
                Designing and deployment of a web application from scratch
                written in React, Tailwind, Next.Js and PostgreSQL for tax
                managment of merchants in the region.
              </li>
            </ul>
          </article>
        </main>
        <div
          className="noise justify-content relative flex w-full items-center overflow-hidden rounded border-b-[4px] border-secondary-shadow bg-primary p-9
            shadow-[0px_4px_6px_0px_#00000035,inset_0px_4px_3px_0px_#00000035]
            before:absolute before:left-0 before:top-0 before:h-[13%] before:w-full before:border-b-2 before:border-b-secondary-shadow before:bg-red-500 before:content-['']
            after:absolute after:bottom-0 after:left-0 after:h-[9%] after:w-full after:bg-red-500"
        ></div>
      </div>
    </section>
  );
}
