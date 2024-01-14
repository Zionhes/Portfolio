function HeaderTitle({ children = null, height = "h-auto" }) {
  return (
    <header
      className={`justify-content ${height} relative flex w-full items-center overflow-hidden rounded rounded-t-sm border-b-[7px] border-secondary-shadow bg-primary px-[1.45rem] py-6 
        shadow-[0px_4px_6px_0px_#00000035,inset_0px_4px_3px_0px_#00000035]
        before:absolute before:left-0 before:top-0 before:h-[13%] before:w-full before:border-b-[3px] before:border-secondary-shadow 
        before:bg-red-500 before:shadow-[0px_3px_2px_0px_#00000035] 
        after:absolute after:bottom-0 after:left-0 after:h-[9%] after:w-full after:bg-red-500 after:content-['']
        lg:gap-5
`}
    >
      {children}
    </header>
  );
}

export default HeaderTitle;
