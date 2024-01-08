import { IconType } from "react-icons";

export default function Button({
  children,
  className = "",
  href = "#",
  rounded = "rounded-md",
  bgColor = "bg-[#2f4858]",
  textColor = "text-white",
  offPadding = true,
}: {
  children: any;
  className?: string;
  reactIcon?: IconType;
  rounded?: string;
  href?: string;
  bgColor?: string;
  iconColor?: string;
  textColor?: string;
  offPadding?: boolean;
}) {
  return (
    <a
      href={href}
      className={`justify-center border-b-[3px] border-b-slate-900 hover:border-b-0 group flex items-center ${rounded} shadow-sm ${bgColor} px-2.5
                py-[0.45rem] text-xs font-bold ${textColor} min-[440px]:text-sm md:text-base ${className} 2xl:text-lg`}
    >
      <p className="flex justify-center items-center">
        {children}
      </p>
    </a>
  );
}
