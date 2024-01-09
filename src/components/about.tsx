import { GiEgyptianProfile } from "react-icons/gi";
import HeaderTitle from "./header-title";

function About() {
  return (
    <section id="about" className="custom-bg-2 pb-20 pt-14">
      <div
        className="mx-auto w-11/12 
        sm:w-[560px]
        md:w-[620px]
        lg:w-[750px]
        xl:w-[950px] xl:text-xl"
      >
        <HeaderTitle>
          <GiEgyptianProfile className="mr-[0.85rem] text-[1.8rem] text-red-500" />
          <h2 className="text-xl font-bold">ABOUT</h2>
        </HeaderTitle>

        <div
          className="relative mx-auto mt-[-3px] h-auto w-11/12 overflow-hidden rounded-b-lg border-b-[3px] border-secondary-shadow bg-primary px-7 pb-10 pt-4
            shadow-[0px_4px_6px_0px_#00000035,inset_0px_4px_3px_0px_#00000035] 
            before:absolute before:bottom-0 before:left-0 before:h-[2%] before:w-full before:bg-red-500 before:content-['']
            after:absolute
            lg:p-14 lg:pb-16 lg:pt-12"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ex
            efficitur, interdum erat vitae, vehicula nunc. Nam lobortis rhoncus
            vestibulum. Morbi tempus, ipsum non eleifend convallis, neque odio
            iaculis diam, id eleifend lectus felis id odio. Nunc mi mauris,
            consectetur ut venenatis vel, viverra at dolor. Vivamus.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ex
            efficitur, interdum erat vitae, vehicula nunc. Nam lobortis rhoncus
            vestibulum. Morbi tempus, ipsum non eleifend convallis, neque odio
            iaculis diam, id eleifend lectus felis id odio. Nunc mi mauris,
            consectetur ut venenatis vel, viverra at dolor. Vivamus.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ex
            efficitur, interdum erat vitae, vehicula nunc. Nam lobortis rhoncus
            vestibulum.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
