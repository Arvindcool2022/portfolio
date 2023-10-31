import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Parallex = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const textMotion = useTransform(scrollYProgress, [0, 1], ['0%', '250%']);
  const starMotion = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const sunMotion = useTransform(scrollYProgress, [0.3, 1], ['0%', '-4%']);

  const condition = type === 'skills';

  return (
    <div
      ref={ref}
      className={`h-full w-full relative flex items-center justify-center overflow-hidden ${
        condition
          ? 'bg-[linear-gradient(180deg,#111132,#0c0c1d)]'
          : 'bg-[linear-gradient(180deg,#111132,#505064)]'
      }`}
    >
      <motion.h1
        className="font-bold text-8xl text-center"
        style={{ y: textMotion }}
      >
        {condition ? 'Skills Spectrum' : 'Project Portfolio'}
      </motion.h1>
      <motion.div
        className="bg-[url('stars.png')] w-full h-full bg-cover bg-bottom absolute "
        style={{ x: starMotion }}
      ></motion.div>
      <motion.div
        style={{
          x: sunMotion,
          backgroundImage: `url(${condition ? '/planets.png' : '/sun.png'})`
        }}
        className="w-full h-full bg-cover bg-bottom absolute"
      ></motion.div>
      <motion.div className="bg-[url('\mountains.png')] w-full h-full bg-cover bg-bottom absolute"></motion.div>
    </div>
  );
};

export default Parallex;
