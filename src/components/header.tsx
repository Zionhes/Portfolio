import { SiGithub, SiLinkedin } from "react-icons/si";
import { gitHub, linkedIn } from "./links";
import { m } from "framer-motion";

import Button from "./button";
import EmailMe from "./email-me";

function Header() {
  return (
    <section
      id="header"
      className="relative flex h-screen items-center justify-center overflow-hidden bg-[#84B1AC] p-4"
    >
      <BackgroundMountains />
      <header className="relative">
        <Card />
        <EmailMe />
      </header>
    </section>
  );
}

function Card() {
  return (
    <m.article
      initial={{ x: 2000 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", bounce: 0.53, delay: 0 }}
      className="md:h-68 shadow-1 flex h-52 max-w-[21rem] gap-4 rounded-xl border-b-[6px] border-b-primary-shadow bg-primary p-4
        sm:h-64 sm:max-w-[25.5rem] sm:gap-5 sm:p-5
        lg:h-72 lg:max-w-[30rem] lg:gap-6 lg:p-6"
    >
      <Shape />
      <Content />
    </m.article>
  );
}

function Shape() {
  return (
    <div className="shadow-2 h-full w-3/12 rounded-md border-b-[3px] border-b-secondary-shadow bg-secondary lg:border-b-4" />
  );
}

function Content() {
  return (
    <main className="flex w-full flex-col justify-between">
      {/* Thanks */}
      <h3 className="text-normal sm:text-normal-big -mb-1 font-bold lg:text-xl">
        HEY THERE!
      </h3>

      {/* Name */}
      <h1 className="lg:text-big -mb-1 text-xl font-bold sm:text-2xl lg:leading-9">
        I AM <span className="text-secondary">ANDERSON RAMOS ROMÁN</span>
      </h1>

      {/* Short description */}
      <p className="text-normal sm:text-normal-big lg:text-xl">
        Web Developer with <span className="font-bold text-red-600">+2</span>{" "}
        years of experience.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-2 sm:gap-3">
        <Button href={gitHub} target="_blank">
          <SiGithub className="mr-[0.3rem] pb-[0.1rem] text-base transition-all ease-in group-hover:text-red-500 lg:mr-[0.3rem] lg:text-xl" />
          <span>Github</span>
        </Button>
        <span className="text-xl font-thin">|</span>
        <Button href={linkedIn} target="_blank">
          <SiLinkedin className="mr-[0.35rem] text-sm transition-all ease-in group-hover:text-sky-500 lg:mr-1.5 lg:text-[1.15rem]" />
          <span>LinkedIn</span>
        </Button>
      </div>
    </main>
  );
}

function BackgroundMountains() {
  /*
   * It's complicated explain this components,
   * but does his work.
   */
  return (
    <div className="bg-pyramids absolute left-0 top-0 mx-auto h-full w-[150%] lg:top-[10rem] lg:w-[140%]" />
  );
}

export default Header;
