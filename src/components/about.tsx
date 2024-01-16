import { GiEgyptianProfile } from "react-icons/gi";
import HeaderTitle from "./header-title";
import HeaderTitleYellow from "./header-tittle-yellow";

function About() {
  return (
    <section id="about" className="relative bg-1 pb-20 pt-14 lg:py-10">
      <div className="lg:flex lg:w-[95%] lg:gap-10 mx-auto
        ">
      <article
        className="mx-auto w-[95%]
          sm:w-[570px]
          md:w-[670px]
          lg:w-[70%]"
      >
        <HeaderTitle>
          <GiEgyptianProfile className="ml-5 mr-[0.85rem] text-[1.8rem] text-red-500 sm:mr-1 lg:text-[2.2rem]" />
          <h2 className="text-xl font-bold mt-1 md:text-2xl lg:text-[1.6rem]">
            ABOUT ME
          </h2>
        </HeaderTitle>

        <div
          className="relative mx-auto mt-[-3px] h-auto w-[95%] overflow-hidden rounded-b-lg border-b-[3px] border-secondary-shadow bg-primary px-7 pb-10 pt-4 shadow-1
            before:absolute before:bottom-0 before:left-0 before:h-[2%] before:w-full before:bg-red-500 before:content-['']
            after:absolute
            sm:text-lg sm:w-[93%] sm:gap-8 sm:p-10 sm:pb-14
            lg:mt-[-2.5px] lg:text-normal-big lg:w-[96%] lg:border-b-[5px] lg:px-14 lg:pb-20 lg:pt-10 lg:before:h-[3%]"
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
      </article>


        {/*
      <article
        className="mx-auto w-[95%]
          sm:w-[570px]
          md:w-[670px]
          lg:w-[50%]"
      >
        <HeaderTitleYellow>
          <GiEgyptianProfile className="ml-5 mr-[0.85rem] text-[1.8rem] text-red-500 sm:mr-1 lg:text-[2.2rem]" />
          <h2 className="text-xl font-bold mt-1 md:text-2xl lg:text-[1.6rem]">
            SKILLS
          </h2>
        </HeaderTitleYellow>

        <div
          className="relative mx-auto mt-[-3px] h-auto w-[95%] overflow-hidden rounded-b-lg border-b-[3px] border-yellow-600 bg-primary px-7 pb-10 pt-4 shadow-1
            before:absolute before:bottom-0 before:left-0 before:h-[2%] before:w-full before:bg-yellow-400 before:content-['']
            after:absolute
            sm:text-lg sm:w-[93%] sm:gap-8 sm:p-10 sm:pb-14
            lg:mt-[-2.5px] lg:text-normal-big lg:w-[94%] lg:border-b-[5px] lg:px-14 lg:pb-20 lg:pt-10 lg:before:h-[3%]"
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
      </article>
        */}

      </div>
    </section>
  );
}

export default About;
