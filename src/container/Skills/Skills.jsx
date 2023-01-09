import React from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import experienceData from "../../data/Experience.json";
import skillData from "../../data/Skill.json";

import "./Skills.scss";

const Skills = () => {
  const experience = experienceData;
  const skills = skillData;

  return (
    <>
      {/* <h1> Experience and skills</h1> */}
      <div className="app__skills-container">
        <motion.div className="app__skills-exp">
          {experience?.map((experience, i) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app_skills-exp-works">
                {experience.works.map((work) => {
                  return (
                    <>
                      <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-exp-work" data-tip data-for={work.name} key={work.name}>
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </motion.div>
                      <ReactTooltip id={work.name} effect="solid" arrowColor="lightgrey" textColor="#000" backgroundColor="#fff" place="right" className="skills-tooltip">
                        {work.desc}
                      </ReactTooltip>
                    </>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-list">
          {skills.map((skill, i) => (
            <motion.div key={skill.name} whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex">
              <div className="app__flex app__primarybg">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__whitebg");
