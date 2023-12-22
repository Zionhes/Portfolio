import { SiGithub, SiGoogledocs } from "react-icons/si";
import img2 from "../picture-of-me.png";

import Button from "./button";

export default function Header() {
  return (
    <header id="home" className="flex h-[90vh] items-center justify-center">
      <Card />
    </header>
  );
}

function Card() {
  return (
    <div
      className="bg-primary border-primary-shadow xl:after:border-secondary-shadow relative mx-4 flex h-56 max-w-[22rem] gap-4 overflow-hidden rounded-xl border-b-[5px] p-4 
        shadow-xl sm:h-72 sm:max-w-md sm:gap-6 
        sm:p-6 md:h-[19rem] 
        md:max-w-lg xl:h-[22.5rem] xl:max-w-[41rem] xl:gap-8 xl:p-9 
        xl:pt-[4.2rem] xl:after:absolute xl:after:left-0 xl:after:top-0 xl:after:h-[9%] xl:after:w-full xl:after:border-b-2 xl:after:bg-red-500 xl:after:shadow-[rgba(50,_50,_105,_0.1)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.23)_0px_1px_1px_0px] 2xl:h-[27rem] 2xl:max-w-3xl 2xl:p-8 2xl:pt-[4.7rem]"
    >
      <ImageForm />
      <ResponsiveText />
    </div>
  );
}

function ImageForm() {
  return (
    <div
      className="border-b-secondary-shadow bg-secondary h-full basis-20 overflow-hidden rounded-lg border-b-2 shadow-[rgba(50,_50,_105,_0.05)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.2)_0px_1px_1px_0px] transition-all
        sm:basis-28 
        md:basis-32 
        xl:h-auto xl:w-[82%] xl:basis-auto xl:rounded-full xl:border-8 xl:border-red-500
        2xl:h-auto 2xl:w-full"
    >
      <div className="z-50 hidden h-full w-full xl:block">
        <img
          src={img2}
          alt="image"
          className="z-50 h-full w-full object-cover"
        />
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
        ML enthusiast and web Developer with 2 years of experience.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-2 sm:gap-3">
        <Button>
          <SiGithub className="mb-[0.1rem] mr-[0.3rem] transition-all ease-in group-hover:text-red-500 xl:mb-0" />
          Github
        </Button>
        <span className="text-xl font-thin">|</span>
        <Button>
          <SiGoogledocs className="mr-1 text-sm transition-all ease-in group-hover:text-red-500" />
          Resume
        </Button>
      </div>
    </div>
  );
}
