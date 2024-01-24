import logo from "../logo-white.svg";
import { linkedIn, gitHub, x, resume } from "./links";

function Footer() {
  return (
    <footer
      className="xl:gap-22 relative mt-[-1rem] flex flex-col justify-between gap-14 rounded-t-lg bg-slate-800
      p-8 pb-6 text-slate-200
      sm:items-center sm:p-10
      md:gap-12 md:p-12 md:px-24 md:pb-6
      lg:gap-12 lg:rounded-t-xl lg:p-10 lg:pb-6 lg:pt-12"
    >
      {/* Flex container */}
      <div
        className="lg:text-normal-big flex w-full justify-between gap-10 text-sm
        font-bold
        sm:justify-around
        md:text-base lg:w-[70%] lg:justify-between"
      >
        {/* Networks */}
        <article className="flex flex-col gap-2 md:gap-3 lg:gap-4">
          <a href={linkedIn}>LinkedIn</a>
          <a href={x}>X</a>
          <a href={gitHub}>Github</a>
        </article>

        {/* Extras */}
        <article className="flex flex-col gap-2 text-slate-400 md:gap-3 lg:gap-4">
          <a href="" className="text-white" target="_blank">
            Page
          </a>
          <a href={resume}>Resume</a>
          <a href="">Buy me a coffe</a>
        </article>

        {/* Logo */}
        <img
          loading="lazy"
          src={logo}
          alt="Logo: Z centauri"
          className="my-auto h-full w-[1.51rem] md:w-[2.3rem] lg:w-[2.45rem]"
        />
      </div>

      {/* Copyright container */}
      <div className="text-center text-xs font-bold md:text-sm lg:flex lg:gap-1">
        <p className="text-slate-400 lg:inline-block">
          DES. AND DEV. BY ANDERSON R. ROMÁN
        </p>
        <p className="text-center lg:inline-block lg:text-slate-400">
          &#169; 2024
        </p>
      </div>
    </footer>
  );
}

export default Footer;
