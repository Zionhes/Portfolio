import { m } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import img2 from "../picture-of-me.png";

import Button from "./button";
import EmailMe from "./email-me";
import { gitHub, linkedIn } from "./links";

function Header() {
  return (
    <section
      id="header"
      className="custom-bg-2 relative flex h-screen flex-col items-center 
        justify-center overflow-hidden px-8"
    >
      <header>
        <BackgroundMountains />
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
      className="relative flex h-56 max-w-[22rem] gap-4 overflow-hidden rounded-[0.6rem] rounded-t-[0.3rem] border-b-[6px] border-primary-shadow bg-primary p-4 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.05)_0px_3px_7px_-3px] transition-all ease-out
        sm:h-72 sm:max-w-md sm:gap-6 sm:p-6
        md:h-[19rem] md:max-w-lg 
        xl:h-[22.5rem] xl:max-w-[41rem] xl:gap-8 xl:p-9 xl:pt-[4.2rem] 
        xl:after:absolute xl:after:left-0 xl:after:top-0 xl:after:h-[9%] xl:after:w-full xl:after:border-b-[6px] xl:after:border-secondary-shadow xl:after:bg-red-500 xl:after:shadow-[rgba(50,_50,_105,_0.1)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.23)_0px_1px_1px_0px] 2xl:h-[27rem] 2xl:max-w-3xl 2xl:p-8 2xl:pt-[4.7rem]"
    >
      <ImageForm />
      <ResponsiveText />
    </m.article>
  );
}

function BackgroundMountains() {
  /*
   * It's complicated explain this components,
   * but does his work.
   */
  return (
    <div
      className="custom-bg_3 absolute left-0 top-0 mx-auto h-[100vh] w-[150%]
        lg:top-[10rem] lg:w-[150%]"
    />
  );
}

function ImageForm() {
  return (
    <div
      className="h-full basis-20 overflow-hidden rounded-[0.4rem] border-b-[3px] border-b-secondary-shadow bg-secondary shadow-[rgba(50,_50,_105,_0.05)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.2)_0px_1px_1px_0px] transition-all
        sm:basis-28 
        md:basis-32 
        xl:h-auto xl:w-[82%] xl:basis-auto xl:rounded-full xl:border-8 xl:border-red-500
        2xl:h-auto 2xl:w-full"
    >
      <div className="hidden h-full w-full xl:block">
        <img src={img2} alt="image" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

function ResponsiveText() {
  return (
    <div className="flex flex-col justify-between">
      <h3
        className="-mb-1 font-bold 
        sm:-mb-3 sm:text-xl 
        md:text-[1.25rem]
        xl:mb-0
        2xl:text-[1.60rem]"
      >
        HEY THERE!
      </h3>
      <h1
        className="-mb-1 text-xl font-bold 
          sm:text-[1.63rem] sm:leading-8 
          md:-mb-3 
          xl:mb-0
          2xl:text-4xl"
      >
        I AM <span className="text-secondary">ANDERSON RAMOS ROMÁN</span>
      </h1>

      <p
        className="2xl: 
          text-[0.93rem] 
          sm:text-[1.2rem] 
          md:text-[1.25rem]
          xl:mb-0 2xl:text-[1.60rem] 2xl:leading-9"
      >
        <span className="font-bold text-red-500">+2</span> years as Front-End
        Developer and ML enthusiast.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-2 sm:gap-3">
        <Button href={gitHub} target="_blank">
          <SiGithub className="mb-[0.1rem] mr-[0.3rem] transition-all ease-in group-hover:text-red-500 xl:mb-0" />
          Github
        </Button>
        <span className="text-xl font-thin">|</span>
        <Button href={linkedIn} target="_blank">
          <SiLinkedin className="mr-1 text-sm transition-all ease-in group-hover:text-red-500" />
          LinkedIn
        </Button>

        {/* <Button>
          <SiGoogledocs className="mr-1 text-sm transition-all ease-in group-hover:text-red-500" />
          Resume
        </Button> */}
      </div>
    </div>
  );
}

export default Header;
