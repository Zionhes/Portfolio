import { m } from "framer-motion";
import { LiaAnkhSolid } from "react-icons/lia";

function Divider({
  svg = null,
  size = "text-4xl",
}: {
  svg?: any;
  size?: string;
}) {
  return (
    <div
      className="relative flex h-10 w-full items-center justify-center border-b-4 border-b-primary-shadow bg-primary 
        shadow-xl
        md:h-10
        lg:h-[2.8rem]"
    >
      <m.div
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.92 }}
        transition={{ duration: 0.01 }}
        className="lg:w-18 z-10 flex h-14 w-14 items-center justify-center rounded-xl border-b-4 border-b-secondary-shadow 
          bg-red-500 
          shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.5)_0px_3px_7px_-3px] md:h-14
          md:w-[4.25rem] 
          lg:h-16 lg:rounded-lg lg:w-[5rem]"
      >
        {svg ? svg : <LiaAnkhSolid className={`${size} text-white lg:text-[2.6rem]`} />}
      </m.div>
    </div>
  );
}

export default Divider;
