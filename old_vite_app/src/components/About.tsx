import useInViewRef from "@/hooks/useInViewRef";
import { fadeIn, textVariant } from "@/lib/utils";
import { services } from "@/static-data";
import { motion } from "framer-motion";
import ReactParallaxTilt from "react-parallax-tilt";
import MaxWidth from "./MaxWidth";
import useSetInViewParamsHash from "@/hooks/useSetInViewParamsHash";

const ServiceCard = ({
  index,
  title,
  icon,
}: {
  index: number;
  title: string;
  icon: string;
}) => {
  const [cardRef, isCardInView] = useInViewRef();

  return (
    <ReactParallaxTilt className="w-full sm:w-[250px]">
      <motion.div
        ref={cardRef}
        initial="hidden"
        animate={isCardInView ? "show" : "hidden"}
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="object-contain w-16 h-16" />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </ReactParallaxTilt>
  );
};

const About = () => {
  const ref = useSetInViewParamsHash();
  const [headingRef, isHeadingInView] = useInViewRef();
  const [textRef, isTextInView] = useInViewRef();

  return (
    <MaxWidth ref={ref} id="about" className="mt-8">
      <motion.div
        ref={headingRef}
        initial="hidden"
        animate={isHeadingInView ? "show" : "hidden"}
        variants={textVariant()}
      >
        <p className="sm:text-[18px] text-[14px] text-primary uppercase tracking-wider">
          Introduction
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview.
        </h2>
      </motion.div>

      <motion.p
        ref={textRef}
        initial="hidden"
        animate={isTextInView ? "show" : "hidden"}
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[17px] max-w-3xl leading-[30px] text-muted-foreground"
      >
        Skilled software developer with extensive experience in TypeScript,
        JavaScript, and Python and a deep expertise in frameworks such as React,
        Next.js, React Native, Node.js, and Flutter. Known for a rapid learning
        curve and a commitment to delivering high-quality code, I work closely
        with clients to design efficient, scalable, and user-centered solutions
        that address complex, real-world challenges. Let’s turn your ideas into
        impactful, seamless digital experiences!
      </motion.p>

      <div className="flex flex-wrap gap-10 mt-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </MaxWidth>
  );
};

export default About;
