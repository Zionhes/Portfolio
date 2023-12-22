import { useState } from "react";
import { LuMenu } from "react-icons/lu"

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
      className="z-10 text-tertiary fixed right-0 top-0 flex w-full flex-col items-end  px-12 py-8
        xl:flex-row xl:bg-transparent xl:justify-end xl:shadow-none"
    >
      <div 
        onClick={() => setIsMenuOpen((state) => !state)}
        className="cursor-pointer xl:hidden">
        <LuMenu  className="text-white text-[2rem] "/>
      </div>

      <ul
        className={`${isMenuOpen ? "shadow-xl bg-primary p-5 rounded-lg border-b-4 border-primary-shadow" : "hidden"} 
        relative my-7 font-medium flex flex-col gap-7 transition-all duration-300 ease-in 
        lx:my-0 lx:flex lx:flex-row lx:gap-10`}
      >
        {links.map((item) => (
          <li 
            className="relative hover:text-red-500 text-tertiary"
          >
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
