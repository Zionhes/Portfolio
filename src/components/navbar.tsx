import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { href: "#home", label: "Card" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="text-white fixed left-0 top-0 flex w-full flex-col justify-between 
      bg-transparent px-12 py-6 md:flex-row md:bg-transparent  md:shadow-none z-10">
      {/*
      <div className="flex cursor-pointer items-center gap-3">
        <AiOutlineCi className="text-3xl text-blue-600" />
        <span className="text-xl font-bold">Logo</span>
      </div>
      */}

      <div className="py-3.5">
        <RxHamburgerMenu
          onClick={() => setIsMenuOpen((menu) => !menu)}
          className="absolute right-8 top-6 h-7 w-7 cursor-pointer md:hidden"
        />
      </div>

      <ul
        className={`${isMenuOpen ? "" : "hidden"
          } my-7 flex flex-col gap-7 transition-all duration-300 ease-in md:my-0 md:flex md:flex-row md:gap-10`}
      >
        {links.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="no-underline hover:underline decoration-2 underline-offset-8 decoration-red-500">{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
