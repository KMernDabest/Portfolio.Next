import Hero from "@/app/sections/hero";
import About from "@/app/sections/about";
import Experience from "@/app/sections/experience";
import Portfolio from "@/app/sections/portfolio";
import Skills from "@/app/sections/skills";
import Contact from "@/app/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Skills />
      <Contact />
    </>
  );
}
