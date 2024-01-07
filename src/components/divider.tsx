function Divider() {
  return (
      <div 
        className="noise relative w-full h-8 md:h-10 bg-primary border-b-primary-shadow border-b-4
          "
      >
        <div 
         className="flex items-center justify-center h-14 w-14 rounded-[1rem] border-b-4 border-b-secondary-shadow bg-red-500 md:w-20 md:h-20 absolute top-[50%] left-[50%] [transform:_translate(-50%,_-50%)]">
          <div className="h-3 w-3 bg-primary rounded-full 
            before:h-8 before:w-8 before:z-[-50] before:bg-purple-500 before:rounded-full before:content-[''] before:absolute before:top-50 before:left-50 before:[transform:_translate(-34%,_-34%)] before:border-l-[2px]">
          </div>
        </div>
      </div>
  )
}

export default Divider;
