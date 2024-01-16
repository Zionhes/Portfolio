import { IconType } from "react-icons";
import { m } from "framer-motion"

export default function Button({
  children,
  className = "",
  href = null,
  rounded = "rounded-md",
  bgColor = "bg-[#2f4858]",
  textColor = "text-white",
  onClick = null,
  target = "_self",
  paddingX = "px-2.5",
  paddingY = "py-[0.45rem]",
  aria = "",
  bt = "active:border-t-primary"
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
  bt?: string;
}) {
  return (
    <m.a
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      aria-label={aria}
      href={href}
      target={target}
      className={`transition-all ease-out duration-[50ms] group flex cursor-pointer items-center justify-center border-b-[3px] border-b-slate-900 active:border-b-0 active:border-t-[3px]  ${rounded} shadow-sm ${bgColor} ${paddingX}
                ${paddingY} text-xs font-bold ${textColor} md:py-2.5 md:text-[0.95rem] ${className} lg:rounded-lg lg:border-b-4 ${bt} lg:py-1.5
                lg:text-lg`}
    >
      <p className="flex items-center justify-center">{children}</p>
    </m.a>
  );
}
