import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import { m } from "framer-motion";
import { IoSend } from "react-icons/io5";
import { LuCopy } from "react-icons/lu";

import SimpleButton from "./simple-button";
import Button from "./button";
import { email } from "./links";

function notify() {
  toast.success("Copied", { style: { minWidth: "110px" } });
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
        onSubmit={(e) => e.preventDefault()}
        aria-label="Send me a email"
        className="mx-center shadow-2 mt-[-3.5px] flex h-12 gap-2 rounded-lg border-b-[6px] border-secondary-shadow bg-secondary px-2 py-1
        sm:h-[3.3rem]
        lg:mt-[-2px] lg:h-[4rem] lg:gap-2 lg:border-b-8 lg:py-1.5"
      >
        <input
          aria-label="Here is my email"
          className="w-full cursor-text rounded bg-primary pt-1 text-center text-[0.82rem]
            shadow-[inset_0px_2px_0px_1px_#a73030]
            sm:pt-1 sm:text-base sm:shadow-[inset_0px_2px_0px_2px_#a73030]
            lg:text-lg"
          type="text"
          value={email}
          disabled
        />
        <CopyToClipboard text={email} onCopy={notify}>
          <SimpleButton
            className="ml-[0.1rem] flex max-w-[15%]"
            paddingX="px-3 md:px-3.5"
            aria="Copy email"
          >
            <LuCopy className="text-lg lg:text-2xl" />
          </SimpleButton>
        </CopyToClipboard>
        <Button
          className="flex max-w-[15%]"
          href={`mailto:${email}`}
          paddingX="px-3 md:px-3.5"
          aria="Send me a email inmediatly."
        >
          <IoSend className="ml-0.5 text-lg lg:text-2xl" />
        </Button>
      </form>
      <Toaster />
    </m.div>
  );
}

export default EmailMe;
