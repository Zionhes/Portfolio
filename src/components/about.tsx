import { GiEgyptianProfile, GiEgyptianPyramids } from "react-icons/gi";
import HeaderTitle from "./header-title";
import HeaderTitleYellow from "./header-tittle-yellow";

function About() {
  return (
    <section id="about" className="bg-1 pt-10 pb-20 lg:pt-16">
      {/* Container */}
      <main className="mx-auto flex flex-col justify-center gap-10 w-[95%] sm:w-[85%] lg:w-[95%] lg:flex-row">

        {/* Red article */}
        <article className="mx-auto flex flex-col w-full">
          <HeaderTitle>
            <GiEgyptianProfile className="ml-5 mr-[0.85rem] text-[1.8rem] text-secondary lg:text-[2.2rem]" />
            <h2 className="mt-1 text-xl font-bold lg:text-[1.6rem]">
              ABOUT ME
            </h2>
          </HeaderTitle>

          <div
            className="shadow-1 grow lg:text-normal-big relative mx-auto mt-[-0.2rem] h-auto w-[95%] overflow-hidden rounded-b-lg border-b-[0.2rem] border-secondary-shadow bg-primary px-7
            pb-10 pt-4 before:absolute before:bottom-0 before:left-0 before:h-[3%] before:w-full
            before:bg-secondary before:content-[''] after:absolute
            lg:mt-[-2.5px] lg:w-[96%] lg:border-b-[5px] lg:px-14 lg:pb-16 lg:pt-10 lg:before:h-[3%]"
          >
            <p>
              I was born on the 28th of November of 2000 in Carúpano, Venezuela.
              I'm a passionate about computer science since a child. I started
              playing with an old PC that belonged to my mother, I remember at
              that time didn’t know english and it was very difficult to learn
              the topics I liked, because my only connection between computer
              science and me was the internet. But that didn’t stop me.
            </p>
            <br />
            <p>
              One of my biggest motivations is learn. That's why I started to
              self-taught, reading books and seeking tutorials firstly for learn
              languages as English, French and German, and later on for learn
              computer science, C and Pyhton.
            </p>
            <br />
            <p>
              I like to be methodical and accurate. And also I enjoy being
              sociable and sharing knowledges of interest.
            </p>
          </div>
        </article>

        {/* Yellow article */}

        <article className="mx-auto justify-stretc flex flex-col w-full lg:w-auto">
          <HeaderTitleYellow>
            <GiEgyptianPyramids className="ml-5 mr-[0.85rem] text-[1.8rem] text-secondary lg:text-[2.2rem]" />
            <h2 className="mt-1 text-xl font-bold lg:text-[1.6rem]">
              SKILLS
            </h2>
          </HeaderTitleYellow>

          <main
            className="shadow-1 grow lg:text-normal-big relative mx-auto mt-[-3px] w-[95%] overflow-hidden rounded-b-lg border-b-[3px] border-yellow-600 bg-primary px-7 pb-10
            pt-4 before:absolute before:bottom-0 before:left-0 before:h-[3%] before:w-full before:bg-yellow-400
            before:content-['']
            after:absolute
            lg:mt-[-2.5px] lg:w-[95%] lg:grow lg:border-b-[5px] lg:px-14 lg:pb-20 lg:pt-10 
            lg:before:h-[4%]"
          >
            <ul className="flex list-inside list-disc flex-col gap-4 marker:text-secondary">
              <li>React and ecosystem: axios, react router, redux, stankbuck react, etc.</li>
              <li>TypeScript, JavaScript, HTML, CSS and SASS.</li>
              <li>English, French and German.</li>
              <li>Next.Js, Express and Astro.</li>
              <li>SQL, C, Python and Rust.</li>
              <p>Open to learn Vue, React Native, Swift and Back-end with Rust or Python</p>
            </ul>
          </main>
        </article>
      </main>
    </section>
  );
}

export default About;
