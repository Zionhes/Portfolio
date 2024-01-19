function HeaderTitleYellow({ children = null, height = "h-[4.5rem]", color = "bg-secondary" }) {
  return (
    <header
      className={`justify-content ${height} relative flex w-full items-center overflow-hidden rounded-lg rounded-t border-b-[0.45rem] border-yellow-600 bg-primary px-[1.45rem] py-6 shadow-1
        before:absolute before:left-0 before:top-0 before:h-[15%] before:w-full before:border-b-[0.2rem] before:border-yellow-600 before:bg-yellow-400 before:shadow-[0px_3px_2px_0px_#00000035] 
        after:absolute after:bottom-0 after:left-0 after:h-[9%] after:w-full after:bg-yellow-400 after:content-['']
        lg:gap-5 lg:py-5 lg:rounded-xl lg:border-b-8 lg:h-20`
      }
    >
      {children}
    </header>
  );
}

export default HeaderTitleYellow;
