import { ArrowDown } from "lucide-react";
import DesktopCanvas from "./canvas/DesktopCanvas";
import MaxWidth from "./MaxWidth";
import useSetInViewParamsHash from "@/hooks/useSetInViewParamsHash";

const Hero = () => {
  const ref = useSetInViewParamsHash();
  return (
    <section className="z-0 h-screen pt-16 bg-center bg-no-repeat bg-cover bg-hero-pattern">
      <MaxWidth ref={ref} id="home" className="relative">
        <div className="flex gap-8 p-4">
          <div className="relative">
            <div className="absolute w-4 h-4 rounded-full bg-primary animate-ping"></div>
            <div className="w-4 h-4 rounded-full bg-primary"></div>
            <div className="relative w-2 h-full left-1 bottom-1 bg-gradient-to-b from-primary to-transparent"></div>
          </div>
          <div className="relative z-20 flex flex-col gap-4 my-4 md:gap-2">
            <h1 className="text-4xl font-extrabold md:text-6xl">
              Hi, I'm <span className="text-primary">Tauqeer Ahmed</span>
            </h1>
            <h3 className="md:text-xl">Building Exceptional Softwares</h3>
            <div className="text-xs lg:text-lg">
              <div className="inline-flex items-center justify-start p-2 px-4 border rounded-md border-white/15 bg-white/10 backdrop-blur">
                <span className="inline-block">
                  <span className="inline-block w-3 h-3 bg-green-800 rounded-full"></span>
                  <span className="relative inline-block w-3 h-3 bg-green-800 rounded-full -left-3 animate-ping"></span>
                </span>
                <h3>Available for new projects</h3>
              </div>
            </div>
            <h5 className="text-xs lg:text-lg">
              I specialize in transforming designs into functional ,
              high-performing Web,
              <br /> Mobile and Desktop Applications, Lets Discuss your next
              project.
            </h5>
          </div>
        </div>
        <div className="absolute w-[300px] md:w-[500px] md:left-[10%] lg:w-[800px] h-96 lg:h-[600px] 3xl:h-[720px] top-52 lg:top-8 lg:left-[20%] z-10">
          <DesktopCanvas />
          <a
            href="#about"
            className="absolute bottom-0 z-50 inline-block p-2 border rounded-full cursor-pointer animate-bounce left-1/2"
          >
            <ArrowDown />
          </a>
        </div>
      </MaxWidth>
    </section>
  );
};

export default Hero;
