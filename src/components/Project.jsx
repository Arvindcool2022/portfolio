import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { btnHover, btnTap } from './buttonAnimation';

const Project = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref
  });

  const y = useTransform(scrollYProgress, [0, 1], [1000, -1000]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-1000, 1000]);

  useEffect(() => {
    console.log(y.get(), y2.get());
  }, [y.get(), y2.get()]);

  return (
    <section className="mx-auto flex max-w-6xl items-center justify-center gap-4 overflow-hidden md:flex-col">
      <motion.div
        ref={ref}
        className="flex-1 overflow-hidden md:mt-4 md:max-h-72 md:w-full md:!transform-none"
        style={{ y: y2 }}
      >
        <img className="h-full w-full md:object-contain" src={item.img} />
      </motion.div>
      <motion.div
        className="flex-1 md:!transform-none md:p-3 md:text-center"
        style={{ y }}
      >
        {' '}
        <h2 className="text-4xl font-bold capitalize text-white md:text-2xl">
          {item.name}
        </h2>
        <p className="mb-3 text-purple-500">{item.tagLine}</p>
        <div className=" mb-5 flex items-center gap-4 md:justify-center sm:hidden">
          {...item.technology}
        </div>
        <p className="text-sm">{item.description}</p>
        <div className="mt-4 flex gap-5 md:justify-center">
          <motion.a
            href={item.code}
            target="_blank"
            whileHover={btnHover}
            whileTap={btnTap}
            className="relative z-10 cursor-pointer overflow-hidden rounded-lg border border-white p-2 text-xs capitalize transition-colors duration-700 ease-in-out before:absolute before:left-0 before:top-0 before:z-[-1] before:h-0 before:w-full before:rounded-[0_0_50%_50%] before:bg-white before:transition-all before:duration-1000 before:content-[''] hover:text-secondary hover:before:h-[180%]"
          >
            source code
          </motion.a>
          <motion.a
            href={item.demo}
            target="_blank"
            whileHover={btnHover}
            whileTap={btnTap}
            className="relative z-10 cursor-pointer overflow-hidden rounded-lg border border-white p-2 text-xs capitalize transition-colors duration-700 ease-in-out before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-0 before:w-full before:rounded-[50%_50%_0_0] before:bg-white before:transition-all before:duration-1000 before:content-[''] hover:text-secondary hover:before:h-[180%]"
          >
            live demo
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
