import { IconType } from "react-icons";
import { m } from "framer-motion";

export default function Button({
  children,
  className = "",
  href = null,
  rounded = "rounded-md",
  bgColor = "bg-button",
  textColor = "text-white",
  onClick = null,
  target = "_self",
  paddingX = "px-2.5",
  paddingY = "py-[0.45rem]",
  aria = "",
  bt = "active:border-t-primary",
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
      whileHover={{ scale: 1.025 }}
      transition={{ duration: 0.1 }}
      onClick={onClick}
      aria-label={aria}
      href={href}
      target={target}
      className={`group flex cursor-pointer items-center justify-center border-b-[0.2rem] border-b-slate-900 transition-all duration-[50ms] ease-out active:border-b-0 active:border-t-[0.2rem]  ${rounded} shadow-sm ${bgColor} ${paddingX}
                ${paddingY} text-xs font-bold ${textColor} ${className} lg:rounded-lg lg:border-b-4 ${bt} lg:py-1.5
                lg:text-lg`}
    >
      <p className="flex items-center justify-center">{children}</p>
    </m.a>
  );
}
