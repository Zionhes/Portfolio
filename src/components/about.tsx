import useIntersection from "../hooks/useIntersection";
import { FaRegCircleDot } from "react-icons/fa6"

export default function Experiences() {
  const [elementRef, isIntersecting] = useIntersection({ threshold: 0.2 });

  return (
    <section
      id="experience"
      className="flex flex-col justify-center items-center"
    >

      <div className="relative bg-primary w-[98%] shadow-md p-6 flex border-b-[4px] overflow-hidden border-secondary-shadow rounded-lg items-center justify-content
             after:h-[10%] after:w-full after:bg-red-500 after:absolute after:left-0 after:bottom-0">
        <FaRegCircleDot className="mr-6 text-red-500" />
        <h2 className="text-xl font-bold">
          EXPERIENCE
        </h2>
      </div>

      <br />

      <article className="shadow-lg rounded-xl w-[90%] bg-primary p-[2.7rem] border-b-[6px] border-primary-shadow">
        <h3 className="font-bold">
          <span className="text-red-500">Front-End Developer</span> • Alcaldía Bolivariana
          del Municipio Ribero
        </h3>
        <p className="text-[0.85rem] font-light mt-2">
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

      <article className="shadow-lg rounded-xl w-[90%] bg-primary p-[2.7rem] border-b-[6px] border-primary-shadow">
        <h3 className="font-bold">
          <span className="text-red-500">Full-stack COO</span> • Alcaldía Bolivariana del
          Municipio Ribero
        </h3>
        <p className="text-sm font-light mt-2">
          Oct 2023 - Dic 2023 | Technological Development Department
        </p>
        <br />
        <ul className="list-inside list-disc marker:text-red-500">
          <li>
            Design and deploy from scratch a web application
            written with React, Tailwind, Next.Js and PostgreSQL for tax
            managment of merchants in the region.
          </li>
        </ul>
      </article>
    </section>
  );
}
