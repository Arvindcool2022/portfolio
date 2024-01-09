import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { projects } from '../utils/constant';
import Project from './Project';

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start']
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio relative" ref={ref} id="projects">
      <div className="progress sticky left-0 top-0 pt-12 text-center text-5xl font-bold capitalize md:top-[calc(100vh-60px)] md:text-2xl ">
        <h1 className="mb-4  sm:hidden">featured works</h1>
        <motion.div
          style={{ scaleX }}
          className="h-1 rounded-sm bg-white"
        ></motion.div>
      </div>
      {projects.map(item => (
        <Project item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
