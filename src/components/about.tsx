import useIntersection from "../hooks/useIntersection";
import { FaRegCircleDot } from "react-icons/fa6"

export default function Experiences() {
  const [elementRef, isIntersecting] = useIntersection({ threshold: 0.2 });

  return (
    <section
      id="experience"
      className="h-[50rem flex flex-col mb-20 justify-center items-center"
    >

      <div className="bg-primary w-full p-6 flex border-b-4 border-primary-shadow items-center justify-content">
        <FaRegCircleDot className="mr-6 text-red-500" />
        <h1 className="text-xl font-bold">
          EXPERIENCE
        </h1>
      </div>

      <br />

      <div className="rounded-xl w-[98%] bg-primary px-14 border-b-4 border-primary-shadow py-5">
        <h3 className="font-bold min-[440px]:text-xl">
          <span className="text-red-500">Front-End Developer</span> • Alcaldía Bolivariana
          del Municipio Ribero
        </h3>
        <p className="text-sm font-light">
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
      </div>

      <br />

      <div className="rounded-xl w-[98%] bg-primary px-14 border-b-4 border-primary-shadow py-5">
        <h3 className="font-bold min-[440px]:text-xl">
          <span className="text-red-500">Full-stack COO</span> • Alcaldía Bolivariana del
          Municipio Ribero
        </h3>
        <p className="text-sm font-light">
          Oct 2023 - Dic 2023 | Technological Development Department
        </p>
        <br />
        <ul className="list-inside list-disc marker:text-red-500">
          <li>
            Design and deploy from scratch a web application
            written with React, Tailwind, Next.Js and PostgreSQL for tax
            managment of merchants in the region.
          </li>
          <br />
        </ul>
      </div>
    </section>
  );
}
