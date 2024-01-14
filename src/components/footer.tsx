import logo from "../logo-white.svg";
import { linkedIn, gitHub, x } from "./links";

function Footer() {
  return (
    <footer
      className="mt-[-1rem] flex flex-col justify-between gap-14 rounded-t-lg bg-slate-800 p-8
      text-slate-200 sm:items-center
      sm:p-10 md:gap-16
      md:p-12
      lg:p-10 xl:px-52 lg:pb-6 lg:pt-12 lg:gap-12 lg:rounded-t-xl
      xl:gap-22
      2xl:px-48"
    >
      {/* Flex container */}
      <div
        className="flex w-full justify-between gap-10 text-sm font-bold
        sm:justify-around
        md:text-base
        lg:justify-between lg:text-lg lg:w-[800px]"
      >
        {/* Networks */}
        <article className="flex flex-col gap-2 md:gap-3 lg:gap-4">
          <a href={linkedIn}>LinkedIn</a>
          <a href={x}>X</a>
          <a href={gitHub}>Github</a>
        </article>

        {/* Extras */}
        <article
          className="flex flex-col gap-2 text-slate-400 md:gap-3 lg:gap-4">
          <a href="" className="text-white" target="_blank">
            Page
          </a>
          <a href="">Resume</a>
          <a href="">Buy me a coffe</a>
        </article>

        {/* Logo */}
        <img
          loading="lazy"
          src={logo}
          alt="Logo: Z centauri"
          className="my-auto w-[1.51rem] h-full md:w-[2.3rem] lg:w-[2.45rem]"
        />
      </div>
      
      {/* Copyright container */}
      <div className="text-center text-xs font-bold md:text-sm lg:text-sm lg:text-start lg:flex lg:gap-1">
        <p className="text-slate-400 lg:inline-block">DES. AND DEV. BY ANDERSON R. ROMÁN</p>
        <p className="text-center lg:inline-block lg:text-slate-400">&#169; 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
