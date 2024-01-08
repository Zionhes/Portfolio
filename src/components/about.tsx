import { GiEgyptianProfile } from "react-icons/gi";
import img2 from "../picture-of-me.png"

function About() {
  return (
    <section className="custom-bg-2 py-10">
      <div className="mx-auto w-[96%] lg:w-[945px]">
        <div
          className="noise justify-content relative flex w-full items-center overflow-hidden rounded border-b-[5px] border-secondary-shadow bg-primary px-[1.45rem] py-6 shadow-md
             before:absolute before:bottom-0 before:left-0 before:h-[9%] before:w-full before:bg-red-500 before:content-[''] after:absolute
             after:left-0 after:top-0 after:h-[13%] after:w-full after:border-b-[3px] after:border-secondary-shadow after:bg-red-500"
        >
          <GiEgyptianProfile className="mr-[0.85rem] text-[1.8rem] text-red-500" />
          <h2 className="text-xl font-bold">ABOUT ME</h2>
        </div>

        <div
          className="relative mx-auto h-80 w-[98%] rounded-b-lg border-b-[6px] border-secondary-shadow bg-primary px-6 py-5
             before:absolute before:bottom-0 before:left-0 before:h-[2%] before:w-full before:bg-red-500 before:content-[''] after:absolute"
        >
          <div className="inline-block h-32 w-32 mr-2 mb-2 border-orange-500 rounded-lg overflow-hidden border-2 xl:block ">
            <img
              src={img2}
              alt="image"
              className="z-50 h-full w-full object-cover shadow-[inset_0px_0px_0px_2px_#f56565]"
            />
          </div>
          <p>FKjsfkj aksfj</p>
        </div>
      </div>
    </section>
  );
}

export default About;
