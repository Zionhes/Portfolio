import { m } from "framer-motion";
import { IconType } from "react-icons";

export default function SimpleButton({
  children,
  className = "",
  rounded = "rounded-md",
  bgColor = "bg-[#2f4858]",
  textColor = "text-white",
  onClick = null,
  paddingX = "px-2.5",
  paddingY = "py-[0.45rem]",
  aria = "",
}: {
  onClick?: any;
  children: any;
  className?: string;
  reactIcon?: IconType;
  rounded?: string;
  href?: string | null;
  bgColor?: string;
  iconColor?: string;
  textColor?: string;
  offPadding?: boolean;
  target?: string;
  paddingX?: string;
  paddingY?: string;
  aria?: string;
}) {
  return (
    <m.button
      whileHover={{ scale: 1.02 }}
      aria-label={aria}
      onClick={onClick}
      className={`group flex cursor-pointer items-center justify-center border-b-[3px] border-b-slate-900 active:border-b-0 active:border-t-[3px] ${rounded} shadow-sm ${bgColor} ${paddingX}
                ${paddingY} text-xs font-bold ${textColor} min-[440px]:text-sm md:text-base ${className} lg:rounded-lg lg:border-b-4 active:border-t-secondary 2xl:text-lg`}
    >
      <p className="flex items-center justify-center">{children}</p>
    </m.button>
  );
}
