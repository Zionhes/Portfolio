import { m } from "framer-motion";
import { IconType } from "react-icons";

export default function SimpleButton({
  children,
  className = "",
  rounded = "rounded-md",
  bgColor = "bg-slate-700",
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
      className={`group flex cursor-pointer items-center justify-center border-b-[0.2rem] border-b-slate-900 transition-all duration-[50ms] ease-out active:border-b-0 active:border-t-[0.2rem] ${rounded} shadow-sm ${bgColor} ${paddingX}
                ${paddingY} text-xs font-bold ${textColor} md:text-base ${className} active:border-t-secondary lg:rounded-lg lg:border-b-4 2xl:text-lg`}
    >
      <p className="flex items-center justify-center">{children}</p>
    </m.button>
  );
}
