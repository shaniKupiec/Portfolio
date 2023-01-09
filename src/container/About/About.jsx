import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import aboutData from "../../data/About.json";

function About() {
  const about = aboutData;

  return (
    <>
      <div className="app__profiles">
        {about.map((about, i) => (
          <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: "tween" }} className="app__profile-item" key={about.title + i}>
            <img src={about.imgUrl} alt={about.title}></img>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__whitebg");
