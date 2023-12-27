import { IconType } from "react-icons";

export default function Button({
  children,
  className = "",
  reactIcon = null,
  href = "#",
  rounded = "rounded-lg",
  bgColor = "bg-[#2f4858]",
  iconColor = "text-red-500",
  textColor = "text-white",
}: {
  children: any;
  className?: string;
  reactIcon?: IconType;
  rounded?: string;
  href?: string;
  bgColor?: string;
  iconColor?: string;
  textColor?: string;
}) {
  return (
    <a
      href={href}
      className={`border-b-[3px] border-b-slate-900 hover:border-b-0 group flex items-center ${rounded} shadow-sm ${bgColor} px-2.5
                py-[0.4rem] text-xs font-bold ${textColor} min-[440px]:text-sm md:text-base ${className} 2xl:text-lg`}
    >
      <p className="flex justify-center items-center">
        {children}
      </p>
    </a>
  );
}
