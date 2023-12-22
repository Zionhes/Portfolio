import useIntersection from "../hooks/useIntersection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

export default function Experiences() {
  const [elementRef, isIntersecting] = useIntersection({ threshold: 0.2 });

  return (
    <section
      id="experience"
      className="flex h-auto w-full items-center justify-center md:h-[35rem]">
      <div
        className={`relative my-4 border border-slate-800 flex w-[95%] overflow-hidden rounded-xl p-7 shadow-md
          transition-all ease-in 
          ${isIntersecting ? "bg-amber-50" : "bg-slate-800"}`}
        ref={elementRef}
      >
        <div
          className={`text-slate-800 transition-all duration-300 ${
            isIntersecting ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="p-4 bg-amber-50 rounded-lg border border-slate-800 shadow-md
            font-bold text-red-500 min-[440px]:text-2xl md:text-3xl">
            <FontAwesomeIcon icon={faList} className="mr-4 text-slate-800" />
            EXPERIENCE
          </h1>
          <br />

          <h3 className="font-bold min-[440px]:text-xl">
            <span className="">Front-End Developer</span> • Alcaldía Bolivariana
            del Municipio Ribero
          </h3>
          <p className="text-sm font-light">
            Jun 2022 - Dic 2023 | Comunication and Information deparment
          </p>
          <br />
          <ul className="mb-12 list-inside list-disc marker:text-red-500">
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
            <br />
          </ul>

          <h3 className="font-bold min-[440px]:text-xl">
            <span className="">Full-stack COO</span> • Alcaldía Bolivariana del
            Municipio Ribero
          </h3>
          <p className="text-sm font-light">
            Oct 2023 - Dic 2023 | Technological Development Department
          </p>
          <br />
          <ul className="list-inside list-disc marker:text-red-500">
            <li>
              Design and deploy from scratch of a web application
              written with React, Tailwind, Next.Js and PostgreSQL for tax
              managment of merchants in the region.
            </li>
            <br />
          </ul>
        </div>
      </div>
    </section>
  );
}
