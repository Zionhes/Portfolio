import logo from "../logo-white.svg";
import { linkedIn, gitHub, x } from "./links";

function Footer() {
  return (
    <footer
      className="xl:gap-22 mt-[-1rem] flex flex-col justify-between gap-14 rounded-t-lg bg-slate-800 p-8
      text-slate-200 sm:items-center
      sm:p-10 md:gap-16
      md:p-12 lg:gap-20
      lg:p-14 xl:px-36
      2xl:px-48
      "
    >
      <div
        className="flex w-full justify-between gap-10 text-sm font-bold
        sm:justify-around
        md:text-base
        "
      >
        <article
          className="flex flex-col gap-2
          md:gap-3
          lg:gap-4
          "
        >
          <a href={linkedIn}>LinkedIn</a>
          <a href={x}>X</a>
          <a href={gitHub}>Github</a>
        </article>

        <article
          className="flex flex-col gap-2 text-slate-400
          md:gap-3
          lg:gap-4
          "
        >
          <a href="" className="text-white" target="_blank">
            Page
          </a>
          <a href="">Resume</a>
          <a href="">Buy me a coffe</a>
        </article>

        <img
          src={logo}
          alt="Logo"
          className="my-auto w-[1.51rem]
          md:w-[2.3rem]
          lg:w-[2.45rem]
          "
        />
      </div>

      <div className="text-center text-xs font-bold md:text-sm">
        <p className="text-slate-400">DES. AND DEV. BY ANDERSON R. ROMÁN</p>
        <p className="text-center">&#169; 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
