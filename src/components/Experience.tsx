import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import useInViewRef from "@/hooks/useInViewRef";
import { textVariant } from "@/lib/utils";
import { experiences } from "@/static-data";
import "react-vertical-timeline-component/style.min.css";

function calculateYearsAndMonthsSince(startYear: number, startMonth: number) {
  // Get the current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // getMonth() is 0-based, so add 1

  // Calculate the difference in years and months
  let yearDifference = currentYear - startYear;
  let monthDifference = currentMonth - startMonth;

  // Adjust if month difference is negative
  if (monthDifference < 0) {
    yearDifference -= 1;
    monthDifference += 12;
  }

  return `${yearDifference}y, ${monthDifference}m`;
}

const ExperienceCard = ({
  experience,
}: {
  experience: {
    title: string;
    companyName: string;
    icon: string;
    iconBg: string;
    date: string;
    year: number;
    month: number;
    points: string[];
  };
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={`${experience.date} ( ${calculateYearsAndMonthsSince(
        experience.year,
        experience.month
      )} )`}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-blue-700 text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.companyName}
        </p>
      </div>

      <ul className="mt-5 ml-5 space-y-2 list-disc">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [experienceRef, isExperienceInView] = useInViewRef();

  return (
    <section id="experience" className="mt-14">
      <motion.div
        ref={experienceRef}
        initial="hidden"
        animate={isExperienceInView ? "show" : "hidden"}
        variants={textVariant()}
      >
        <p
          className={`sm:text-[18px] text-[14px] text-primary uppercase tracking-wider text-center`}
        >
          What I have done so far
        </p>
        <h2
          className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}
        >
          Work Experience.
        </h2>
      </motion.div>

      <div className="flex flex-col mt-20">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
