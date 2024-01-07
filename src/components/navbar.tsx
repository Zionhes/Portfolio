import { useState } from "react";
import { LuMenu } from "react-icons/lu";

//xl:bg-primary xl:py-1 xl:px-2 xl:rounded border-b-2 xl:border-primary-shadow overflow-hidden
// xl:after:absolute xl:after:left-0 xl:after:top-0 xl:after:h-[10%] xl:after:w-full xl:after:bg-red-500

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { href: "#home", label: "Card" },
    { href: "#experience", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className="fixed right-0 top-0 z-10 flex w-full flex-col items-end p-8 text-tertiary md:p-12
        xl:flex-row xl:justify-end xl:bg-transparent xl:shadow-none"
    >
      <label className="cursor-pointer">
        <input
          type="checkbox"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="peer hidden [&:checked_+_svg_.a]:[stroke-dasharray:_20_300] [&:checked_+_svg_.a]:[stroke-dashoffset:_-32.42]"
        />
        <svg
          viewBox="0 0 32 32"
          className="h-[3rem] [transition:_transform_600ms_cubic-bezier(0.4,_0,_0.2,_1)] peer-checked:[transform:_rotate(-45deg)]"
        >
          <path
            className="a stroke-[white] stroke-[3] [fill:_none] [stroke-dasharray:_12_63] [stroke-linecap:_round] [stroke-linejoin:_round] [transition:_stroke-dasharray_600ms_cubic-bezier(0.4,_0,_0.2,_1),_stroke-dashoffset_600ms_cubic-bezier(0.4,_0,_0.2,_1)]"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path
            className="stroke-[white] stroke-[3] [fill:_none] [stroke-linecap:_round] [stroke-linejoin:_round] [transition:_stroke-dasharray_600ms_cubic-bezier(0.4,_0,_0.2,_1),_stroke-dashoffset_600ms_cubic-bezier(0.4,_0,_0.2,_1)]"
            d="M7 16 27 16"
          ></path>
        </svg>
      </label>

      {/*
      <div
        onClick={() => setIsMenuOpen((state) => !state)}
        className="cursor-pointer xl:hidden">
        <LuMenu className="text-white text-[2rem] " />
      </div>
      */}

      <ul
        className={`${
          isMenuOpen
            ? "rounded-lg border-b-4 border-primary-shadow bg-primary p-5 shadow-xl"
            : "hidden"
        } 
        lx:my-0 lx:flex lx:flex-row lx:gap-10 relative flex flex-col gap-7 
        font-medium transition-all duration-300 ease-in`}
      >
        {links.map((item) => (
          <li className="relative text-tertiary hover:text-red-500">
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
