import { LiaAnkhSolid } from "react-icons/lia";


function Divider({ svg = null }: { svg?: any }) {
  return (
      <div 
        className="noise shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] relative w-full h-10 md:h-10 bg-primary border-b-primary-shadow border-b-4
          "
      >
        <div 
          className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.5)_0px_3px_7px_-3px] flex items-center justify-center h-14 w-14 rounded-[.7rem] border-b-4 border-b-secondary-shadow bg-red-500 md:w-20 md:h-20 absolute top-[50%] left-[50%] [transform:_translate(-50%,_-50%)]"
      >
            {svg ? svg : <LiaAnkhSolid className="text-4xl text-white"/>}
        </div>
      </div>
  )
}
/*
          <div className="h-3 w-3 bg-primary rounded-full 
            before:h-8 before:w-8 before:z-[-50] before:bg-purple-500 before:rounded-full before:content-[''] before:absolute before:top-50 before:left-50 before:[transform:_translate(-34%,_-34%)] before:border-l-[2px]">
          </div>
 */

export default Divider;
