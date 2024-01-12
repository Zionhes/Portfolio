import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import { m } from "framer-motion";
import { IoSend } from "react-icons/io5";
import { LuCopy } from "react-icons/lu";

import Button from "./button";
import { email } from "./links";

function notify() {
  toast.success("Copied", { style: { minWidth: "100px" } });
}

function EmailMe() {
  return (
    <m.div
      className="relative"
      initial={{ x: -2000 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", bounce: 0.35, delay: 0.5 }}
    >
      <form
        className="mx-center mt-[-3.5px] flex h-[3rem] gap-2 rounded-lg border-b-[6px] border-secondary-shadow bg-secondary px-2 py-1 
        shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.25)_0px_3px_7px_-3px]
        lg:mt-[-2px] lg:h-[4.3rem] lg:gap-1.5 lg:border-b-8 lg:py-1.5
        "
      >
        <input
          className="grow cursor-text rounded bg-primary text-center text-[0.82rem]
            shadow-[inset_0px_2px_0px_1px_#a73030]
            lg:text-[1.4rem] lg:shadow-[inset_0px_2px_0px_2px_#a73030]
          "
          type="text"
          value={email}
          disabled
        />
        <CopyToClipboard text={email} onCopy={notify}>
          <Button
            className="ml-[0.1rem] flex max-w-[15%]"
            paddingX="px-3 lg:px-5"
          >
            <LuCopy className="text-lg lg:text-2xl" />
          </Button>
        </CopyToClipboard>
        <Button
          className="flex max-w-[15%]"
          href={`mailto:${email}`}
          paddingX="px-3 lg:px-5"
        >
          <IoSend className="ml-0.5 text-lg lg:text-2xl" />
        </Button>
      </form>
      <Toaster />
    </m.div>
  );
}

export default EmailMe;
