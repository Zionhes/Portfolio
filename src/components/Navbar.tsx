import { m, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { href: "#header", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
];
const breakpoint: number = 1080;

function Navbar() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResizeWindows = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResizeWindows);

    return () => {
      window.removeEventListener("resize", handleResizeWindows);
    };
  }, []);

  return <>{width < breakpoint ? <MobileNav /> : <DesktopNav />}</>;
}

function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="fixed right-[-3px] top-[-3px] z-50 m-6 p-0.5 text-tertiary">
        <div
          className=" rounded-xl border-b-4 border-secondary-shadow bg-secondary 
        shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.5)_0px_3px_7px_-3px]
        md:p-4 xl:flex-row xl:justify-end xl:bg-transparent xl:shadow-none"
        >
          <NavMenuButton
            onIsMenuClicked={() => setIsMenuOpen((state) => !state)}
          />
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            // Red Container
            <m.div
              key="Red"
              initial={{ height: 0, width: 0 }}
              animate={{ height: "18rem", width: "10.5rem" }}
              transition={{ duration: 0.1 }}
              exit={{
                height: 0,
                width: 0,
                transition: { duration: 0.15, delay: 0.15 },
              }}
              className="fixed right-[2px] top-[2px] -z-10 m-6 rounded-xl border-b-[6px] border-secondary-shadow bg-red-500 text-end shadow-xl"
            >
              {/* Primary container */}
              <m.div
                key="Primary"
                initial={{ width: 0 }}
                animate={{ width: "90%" }}
                exit={{ width: 0, transition: { duration: 0.1 } }}
                transition={{ duration: 0.1, delay: 0.15 }}
                className="ml-2 mt-16 w-full rounded-xl border-b-4 border-primary-shadow bg-primary"
              >
                {/* List */}
                <m.ul
                  key="Secondart"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0, transition: { duration: 0.05 } }}
                  className="flex flex-col justify-end gap-4 p-6 text-lg font-bold"
                >
                  {sections.map((item) => (
                    <li className="hover:text-red-500 focus:text-red-500 active:text-red-500">
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </m.ul>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

function DesktopNav() {
  return (
    <nav className="bg-blac/15 backdrop-blu fixed right-0 top-0 z-50 w-full px-20 py-2 text-[1.6rem]">
      <ul className="flex justify-end gap-14 p-6 font-bold text-white">
        {sections.map((item) => (
          <li className="hover:text-red-500">
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function NavMenuButton({ onIsMenuClicked }) {
  return (
    <label className="cursor-pointer">
      <input
        type="checkbox"
        onClick={onIsMenuClicked}
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
  );
}

export default Navbar;
