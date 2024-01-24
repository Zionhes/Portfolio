import { SiGithub, SiLinkedin } from "react-icons/si";
import { IoDocumentText } from "react-icons/io5";
import { gitHub, linkedIn, resume } from "./links";
import { m } from "framer-motion";

import Resume from "./Resume";
import Button from "./button";
import EmailMe from "./email-me";

function Header() {
  return (
    <section
      id="header"
      className="bg-1 relative flex h-screen items-center justify-center overflow-hidden p-4"
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
      className="shadow-1 flex h-52 max-w-xs gap-4 rounded-xl border-b-[0.4rem] border-b-primary-shadow bg-primary p-4
        md:rounded-2xl
        lg:h-[17rem] lg:max-w-[26.2rem] lg:p-6"
    >
      <Shape />
      <Content />
    </m.article>
  );
}

function Shape() {
  return (
    <m.div
      whileTap={{ scale: 0.95, transition: { duration: 0.03, type: "spring" } }}
      className="shadow-2 h-full w-3/12 rounded-md border-b-[0.2rem] border-b-secondary-shadow bg-secondary lg:rounded-lg lg:border-b-4"
    />
  );
}

function Content() {
  return (
    <main className="flex w-full flex-col justify-between">
      {/* Thanks */}
      <h3 className="text-normal lg:text-normal-big -mb-1 font-bold">
        HEY THERE!
      </h3>

      {/* Name */}
      <h1 className="-mb-1 text-xl font-bold leading-6 lg:text-2xl">
        I AM <span className="text-secondary">ANDERSON RAMOS ROMÁN</span>
      </h1>

      {/* Short description */}
      <p className="text-normal lg:text-normal-big">
        Web Developer with <span className="font-bold text-secondary">+1</span>{" "}
        year of experience.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-2">
        <Button href={resume} target="_blank">
          <IoDocumentText className="mr-[0.3rem] pb-[0.1rem] text-base transition-all duration-[80ms] group-hover:text-secondary lg:mr-[0.3rem] lg:text-xl" />
          <span>Resume</span>
        </Button>
        {/*
       <span className="text-xl font-thin text-secondary md:text-2xl">|</span>  
       */}
        <Button href={linkedIn} target="_blank">
          <SiLinkedin className="mr-[0.35rem] text-sm transition-all duration-100 group-hover:text-secondary lg:mr-1.5 lg:text-[1.15rem]" />
          <span>LinkedIn</span>
        </Button>
        <Button href={gitHub} className="lg:h-[40.67px]" target="_blank">
          <SiGithub className="text-base transition-all duration-100 group-hover:text-secondary lg:text-2xl" />
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
    <div className="bg-pyramids absolute left-0 top-0 h-full w-[150%] lg:top-[8rem] lg:w-[140%]" />
  );
}

export default Header;
