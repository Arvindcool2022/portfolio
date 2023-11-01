import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { btnHover, btnTap } from './buttonAnimation';

const Project = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="flex md:flex-col items-center justify-center max-w-6xl mx-auto gap-4">
      <div className="flex-1 overflow-hidden md:max-h-72 md:w-full md:mt-4">
        <img
          ref={ref}
          className="w-full h-full md:object-contain"
          src={item.img}
        />
      </div>
      <motion.div
        className="flex-1 md:text-center md:!transform-none md:p-3"
        style={{ y }}
      >
        <h2 className="capitalize text-4xl font-bold text-white md:text-2xl">
          {item.name}
        </h2>
        <p className="mb-3 text-purple-500">{item.tagLine}</p>
        <div className=" flex gap-4 mb-5 md:justify-center sm:hidden">
          {...item.technology}
        </div>
        <p className="text-sm">{item.description}</p>
        <div className="flex gap-5 mt-4 md:justify-center">
          <motion.a
            whileHover={btnHover}
            whileTap={btnTap}
            className="relative p-2 text-xs border border-white rounded-lg cursor-pointer capitalize z-10 overflow-hidden transition-colors duration-700 ease-in-out hover:text-secondary before:content-[''] before:absolute before:w-full before:h-0 before:z-[-1] before:rounded-[0_0_50%_50%] before:top-0 before:transition-all before:duration-1000 before:left-0 before:bg-white hover:before:h-[180%]"
          >
            source code
          </motion.a>
          <motion.a
            whileHover={btnHover}
            whileTap={btnTap}
            className="relative p-2 text-xs border border-white rounded-lg cursor-pointer capitalize z-10 overflow-hidden transition-colors duration-700 ease-in-out hover:text-secondary before:content-[''] before:absolute before:w-full before:h-0 before:z-[-1] before:rounded-[50%_50%_0_0] before:bottom-0 before:transition-all before:duration-1000 before:left-0 before:bg-white hover:before:h-[180%]"
          >
            live demo
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
