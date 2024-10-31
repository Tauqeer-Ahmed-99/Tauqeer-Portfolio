import useInViewRef from "@/hooks/useInViewRef";
import { fadeIn, textVariant } from "@/lib/utils";
import { technologies } from "@/static-data";
import { motion } from "framer-motion";
import ReactParallaxTilt from "react-parallax-tilt";
import MaxWidth from "./MaxWidth";

const TechCard = ({
  name,
  icon,
  index,
}: {
  name: string;
  icon: string;
  index: number;
}) => {
  const [techRef, isTechRefInView] = useInViewRef({ once: false });

  return (
    <ReactParallaxTilt>
      <motion.div
        ref={techRef}
        initial="hidden"
        animate={isTechRefInView ? "show" : "hidden"}
        variants={fadeIn("right", "spring", index * 0.05, 0.75)}
        className="flex flex-col items-center justify-center w-32 h-32 gap-2 rounded-full cursor-pointer bg-tertiary"
      >
        <img src={icon} alt={name} className="h-12" />
        <h3 className="text-xs">{name}</h3>
      </motion.div>
    </ReactParallaxTilt>
  );
};

const TechStack = () => {
  const [technologiesRef, isTechnologiesInView] = useInViewRef();

  return (
    <MaxWidth>
      <section id="technologies" className="mt-14">
        <motion.div
          ref={technologiesRef}
          initial="hidden"
          animate={isTechnologiesInView ? "show" : "hidden"}
          variants={textVariant()}
        >
          <p
            className={`sm:text-[18px] text-[14px] text-primary uppercase tracking-wider text-center`}
          >
            Technologies I Work With
          </p>
          <h2
            className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}
          >
            Tech Stack.
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 my-14">
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} {...tech} index={index} />
          ))}
        </div>
      </section>
    </MaxWidth>
  );
};

export default TechStack;
