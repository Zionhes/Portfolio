import useIntersection from "../hooks/useIntersection";
import { FaRegCircleDot } from "react-icons/fa6";

export default function Experiences() {
  const [elementRef, isIntersecting] = useIntersection({ threshold: 0.2 });

  return (
    <section id="experience" className="py-[3rem] custom-bg">

        <div className="bg-red-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 relative flex flex-col mx-auto items-center overflow-hidden w-[96%]">
          <div
            className="noise justify-content relative flex w-full items-center overflow-hidden rounded border-b-[5px] border-primary-shadow bg-primary p-6 shadow-md
             after:absolute after:left-0 after:top-0 after:h-[13%] after:w-full after:border-b-[3px] after:border-secondary-shadow after:bg-red-500"
          >
            <FaRegCircleDot className="mr-6 text-red-500" />
            <h2 className="text-xl font-bold">EXPERIENCE</h2>
          </div>

          <br />

          <article
            className="noise w-[90%] rounded-xl border-b-[6px] border-primary-shadow bg-primary p-[2.7rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]
          "
          >
            <h3 className="font-bold">
              <span className="text-red-500">Front-End Developer</span> • Alcaldía
              Bolivariana del Municipio Ribero
            </h3>
            <p className="mt-2 text-[0.85rem] font-light">
              Jun 2022 - Dic 2023 | Comunication and Information deparment
            </p>
            <br />
            <ul className="list-inside list-disc marker:text-red-500">
              <li className="decoration-red-500">
                Administration Dashboard migrated from vanilla HTML, CSS and JS to
                React and Next.Js, for the management of personal and services
                performed daily by the organization.
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
                Design and deploy from scratch a web application written with
                React, Tailwind, Next.Js and PostgreSQL for tax managment of
                merchants in the region.
              </li>
            </ul>
          </article>
          <br />
          <div
            className="noise justify-content relative flex w-full items-center overflow-hidden rounded border-b-[4px] border-secondary-shadow bg-primary p-6 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]
             after:absolute after:bottom-0 after:left-0 after:h-[10%] after:w-full after:bg-red-500"
          ></div>





      </div>
    </section>
  );
}
