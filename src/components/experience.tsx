import useIntersection from "../hooks/useIntersection";
import { FaRegCircleDot } from "react-icons/fa6";
import { GiEgyptianSphinx } from "react-icons/gi";
import { GiEgyptianBird, GiEgyptianTemple } from "react-icons/gi";

export default function Experiences() {
  const [elementRef, isIntersecting] = useIntersection({ threshold: 0.2 });

  return (
    <section id="experience" className="custom-bg-4 py-16">
      <div className="lg:w-[945px] mx-auto w-[96%]">
        <div
          className="noise justify-content relative flex w-full items-center rounded border-b-[5px] border-secondary-shadow bg-primary py-6 px-[1.45rem] shadow-md
             before:absolute before:bottom-0 before:left-0 before:h-[9%] before:w-full before:bg-red-500 before:content-[''] after:absolute
             after:left-0 after:top-0 after:h-[13%] after:w-full after:border-b-[3px] after:border-secondary-shadow after:bg-red-500"
        >
          <GiEgyptianBird className="mr-[0.85rem] text-[1.8rem] text-red-500" />
          <h2 className="text-xl font-bold">EXPERIENCE</h2>
        </div>

        <div className="w-[98%] mx-auto backdrop-blur-[_px] relative flex flex-col items-center overflow-hidden border-x border-teal-300/30 bg-teal-500/25 bg-clip-padding backdrop-filter ">
          <br />

          <article
            className="noise w-[90%] rounded-xl border-b-[6px] border-primary-shadow bg-primary p-[2.7rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]
          "
          >
            <h3 className="font-bold">
              <span className="text-red-500">Front-End Developer</span> •
              Alcaldía Bolivariana del Municipio Ribero
            </h3>
            <p className="mt-2 text-[0.85rem] font-light">
              Jun 2022 - Dic 2023 | Comunication and Information deparment
            </p>
            <br />
            <ul className="list-inside list-disc marker:text-red-500">
              <li className="decoration-red-500">
                Administration Dashboard migrated from vanilla HTML, CSS and JS
                to React, for the management of personal and
                services daily performed by the organization.
              </li>
              <br />
              <li>
                Designing a user interface from scratch and implementing it in a
                web interface using TailwindCSS.
              </li>
            </ul>
          </article>

          <br />

          <article className="noise w-[90%] rounded-xl border-b-[6px] border-primary-shadow bg-primary p-[2.7rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
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
                Designing and deployment of a web application from scratch written in
                React, Tailwind, Next.Js and PostgreSQL for tax managment of
                merchants in the region.
              </li>
            </ul>
          </article>
          <br />
        </div>
          <div
            className="noise justify-content relative flex w-full items-center overflow-hidden rounded border-b-[4px] border-secondary-shadow bg-primary p-9 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]
              before:absolute before:content-[''] before:bg-red-500 before:h-[13%] before:w-full before:top-0 before:left-0 before:border-b-2 before:border-b-secondary-shadow
              after:absolute after:bottom-0 after:left-0 after:h-[9%] after:w-full after:bg-red-500"
          ></div>
      </div>
    </section>
  );
}
