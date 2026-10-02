import { motion } from "framer-motion";

import { GitHubIcon } from "@/assets";
import { fadeIn, textVariant, truncate } from "@/lib/utils";
import { projects, technologies } from "@/static-data";
import ReactParallaxTilt from "react-parallax-tilt";
import MaxWidth from "./MaxWidth";
import { Badge } from "@/components/ui/badge";
import useInViewRef from "@/hooks/useInViewRef";
import useSetInViewParamsHash from "@/hooks/useSetInViewParamsHash";

const Tag = ({ name }: { name: string }) => {
  const techIcon = technologies.find(
    (tech) =>
      name.toLowerCase().includes(tech.name.toLowerCase()) ||
      tech.name.toLowerCase().includes(name.toLowerCase())
  );
  return (
    <Badge className="flex items-center gap-2 text-xs">
      {techIcon && (
        <img src={techIcon.icon} alt={techIcon.name} className="w-4" />
      )}
      {name}
    </Badge>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: {
  index: number;
  name: string;
  description: string;
  tags: string[];
  image: string;
  source_code_link: string;
}) => {
  const [projectRef, isProjectInView] = useInViewRef();

  return (
    <motion.div
      ref={projectRef}
      initial="hidden"
      animate={isProjectInView ? "show" : "hidden"}
      variants={fadeIn("up", "spring", index * 0.05, 0.75)}
      className="h-full"
    >
      <ReactParallaxTilt className="w-full h-full p-5 bg-tertiary rounded-2xl">
        <div className="relative w-full h-[200px]">
          <img
            src={image}
            alt="project_image"
            className="object-cover w-full h-full rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient backdrop-blur bg-white/15"
            >
              <img
                src={GitHubIcon}
                alt="source code"
                className="object-contain w-1/2 h-1/2"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="font-bold text-white">{name}</h3>
          <p className="mt-2 text-xs text-muted-foreground">
            {truncate(description, 150)}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </div>
      </ReactParallaxTilt>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useSetInViewParamsHash();
  const [headingRef, isHeadingInView] = useInViewRef();
  const [textRef, isTextInView] = useInViewRef();
  return (
    <MaxWidth ref={ref} id="projects">
      <motion.div
        ref={headingRef}
        initial="hidden"
        animate={isHeadingInView ? "show" : "hidden"}
        variants={textVariant()}
      >
        <p
          className={`sm:text-[18px] text-[14px] text-primary uppercase tracking-wider`}
        >
          My work
        </p>
        <h2
          className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}
        >
          Projects.
        </h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          ref={textRef}
          initial="hidden"
          animate={isTextInView ? "show" : "hidden"}
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-[17px] max-w-3xl leading-[30px] text-muted-foreground"
        >
          The following projects highlight my skills and experience with
          real-world examples. Each project includes a brief description, along
          with links to code repositories and live demos, showcasing my ability
          to tackle complex problems, adapt to diverse technologies, and manage
          projects with precision and efficiency.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </MaxWidth>
  );
};

export default Projects;
