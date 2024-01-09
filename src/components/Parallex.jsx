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
      className={`relative flex h-full w-full items-center justify-center overflow-hidden ${
        condition
          ? 'bg-[linear-gradient(180deg,#111132,#0c0c1d)]'
          : 'bg-[linear-gradient(180deg,#111132,#505064)]'
      }`}
    >
      <motion.h1
        className="text-center text-8xl font-bold xs:text-6xl"
        style={{ y: textMotion }}
      >
        {condition ? 'Skills Spectrum' : 'Project Portfolio'}
      </motion.h1>
      <motion.div
        className="absolute h-full w-full bg-cover bg-bottom "
        style={{ x: starMotion, backgroundImage: `url('./stars.webp')` }}
      ></motion.div>
      <motion.div
        style={{
          x: sunMotion,
          backgroundImage: `url(${condition ? './planets.webp' : './sun.webp'})`
        }}
        className="absolute h-full w-full bg-cover bg-bottom"
      ></motion.div>
      <motion.div
        style={{ backgroundImage: `url('./mountains.webp')` }}
        className="absolute h-full w-full bg-cover bg-bottom"
      ></motion.div>
    </div>
  );
};

export default Parallex;
