function simpleButton({ children="", href="#" }) {
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
  )
}
