import { IconType } from "react-icons";

export default function Button({
  children,
  className = "",
  href = null,
  rounded = "rounded-md",
  bgColor = "bg-[#2f4858]",
  textColor = "text-white",
  onClick = null,
  target = "_self",
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
}) {
  return (
    <a
      onClick={onClick}
      href={href}
      target={target}
      className={`group flex cursor-pointer items-center justify-center border-b-[3px] border-b-slate-900 active:border-b-0 ${rounded} shadow-sm ${bgColor} px-2.5
                py-[0.45rem] text-xs font-bold ${textColor} min-[440px]:text-sm md:text-base ${className} 2xl:text-lg`}
    >
      <p className="flex items-center justify-center">{children}</p>
    </a>
  );
}
