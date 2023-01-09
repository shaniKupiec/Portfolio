import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import workData from '../../data/Work.json'
import "./Work.scss";


const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [category, setCategory] = useState([]);
  
  const works = workData;
  const [filterWork, setFilterWork] = useState(workData);

  useEffect(() => {
    const categorySet = new Set();
    workData.map(work => {
      work.tags.map(tag => categorySet.add(tag))
    })
    categorySet.add("All")
    setCategory(Array.from(categorySet))
  }, [])

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") setFilterWork(works);
      else setFilterWork(works.filter((work) => work.tags.includes(item)));
    }, 500);
  };

  return (
    <>
      <div className="app__work-filter">
        {category.map((item, i) => (
          <div key={i} onClick={() => handleWorkFilter(item)} className={`app__work-filter-item app__flex p-text ${activeFilter === item ? "item-active" : ""}`}>
            {item}
          </div>
        ))}
      </div>

      <motion.div animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }} className="app__work-portfolio">
        {filterWork.map((work, i) => (
          <div className="app__work-item app__flex" key={i}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title}></img>

              <motion.div whileHover={{ opacity: [0, 1] }} transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }} className="app__work-hover app__flex">
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }} className=" app__flex">
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }} className=" app__flex">
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__works"), "work", "app__primarybg");
