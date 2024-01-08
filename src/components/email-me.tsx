import { motion } from "framer-motion"
import { IoSend } from "react-icons/io5";
import { LuCopy } from "react-icons/lu";

import Button from "./button";

function EmailMe() {
  return (
    <motion.form 
      className="w-[88%] px-2 bg-secondary py-1 rounded-[0.3rem] mt-[-3px] border-b-[6px] border-secondary-shadow relative flex h-[3rem] place-content-center gap-4 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
      initial={{ x: -1920 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", bounce: 0.25, delay: 1 }}
    >

      <input
        className="bg-primary basis-4/5 rounded text-center text-[0.82rem] shadow-[inset_0px_2px_0px_1px_#b2aa8b]"
        id="mail"
        type="text"
        value="andersonegoistisch@gmail.com"
        disabled
      />
      <Button className="flex basis-[15%]">
        <LuCopy className="text-lg" />
      </Button>
      <Button className="basis-[15%]">
        <IoSend className="ml-0.5 text-lg" />
      </Button>
    </motion.form>
  );
}

export default EmailMe;
