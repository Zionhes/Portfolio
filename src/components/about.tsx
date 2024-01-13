import { GiEgyptianProfile } from "react-icons/gi";
import HeaderTitle from "./header-title";

function About() {
  return (
    <section id="about" className="bg-1 pb-20 pt-14">
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
            I was born on the 28th of November of 2000 in Carúpano, Venezuela.
            I'm a passionate about computer science since a child. I started
            playing with an old PC that belonged to my mother, I remember at
            that time didn’t know english and it was very difficult to learn the
            topics I liked, because my only connection between computer science
            and me was the internet. But that didn’t stop me.
          </p>
          <br />
          <p>
            One of my biggest motivations is learn. That's why I started to
            self-taught, reading books and seeking tutorials firstly for learn
            languages as English, French and German, and later on for learn
            computer science. Years later I was going to start a computer
            engineering, but I didn’t do it due to country situation, in spite
            of that I have not stopped to keep learning and keep work as
            developer.
          </p>
          <br />
          <p>
            I like share knowledge, meet people and learn new things which will
            be our future.
          </p>
          <br />
          <p>I say it’s time to fly high, but... not too close to the sun.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
