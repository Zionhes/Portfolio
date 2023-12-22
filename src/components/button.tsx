import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconType } from "react-icons";

export default function Button({
  children,
  className = "",
  icon = null,
  reactIcon = null,
  href = "#",
  bgColor = "bg-[#2f4858]",
  iconColor = "text-red-500",
  textColor = "text-white",
}: {
  children: any;
  className?: string;
  icon?: any;
  reactIcon?: IconType;
  href?: string;
  bgColor?: string;
  iconColor?: string;
  textColor?: string;
}) {
  return (
    <a
      href={href}
      className={`border-b-2 border-b-slate-900 hover:border-b-0 group flex items-center rounded-lg shadow-sm ${bgColor} px-2.5
                py-[0.4rem] text-xs font-bold ${textColor} min-[440px]:text-sm md:text-base ${className} 2xl:text-lg`}
    >
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className={`${iconColor} min-[440px]:text-md mr-2 text-xs transition-all
                  duration-100 group-hover:text-cyan-400`}
        />
      )}
      <p className="flex justify-center items-center">
        {children}
      </p>
    </a>
  );
}
