import { motion } from 'framer-motion';
import { btnHover, btnTap } from './buttonAnimation';

const textVariant = {
  initial: {
    x: -500,
    opacity: 0.5
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
      staggerChildren: 0.15
    }
  },
  scrollAnimate: {
    opacity: 0,
    y: 10,
    transition: { duration: 2, repeat: Infinity }
  }
};
const sliderVariant = {
  initial: {
    x: '0%'
  },

  animate: {
    x: '-80%',
    transition: {
      type: 'tween',
      duration: 50,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'linear'
    }
  }
};

const Hero = () => {
  return (
    <div className="h-[calc(100vh-100px)] bg-[linear-gradient(180deg,#0c0c1d,#111132)] overflow-hidden ">
      <div className=" max-w-7xl h-full mx-auto relative">
        <motion.div
          className="mx-auto h-full lg:w-full flex flex-col justify-center lg:items-center  gap-10"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={textVariant}
            className="text-3xl ps-1 text-purple-700 tracking-[10px] md:tracking-widest font-bold uppercase"
          >
            Arvind A
          </motion.h1>
          <motion.h2
            variants={textVariant}
            className="text-8xl lg:text-center lg:text-6xl lg:max-w-max max-w-min font-bold"
          >
            Front-End Developer
          </motion.h2>
          <motion.div variants={textVariant} className="flex gap-5">
            <motion.a
              href="#projects"
              whileHover={btnHover}
              whileTap={btnTap}
              className="relative p-5 border border-white rounded-xl cursor-pointer z-10 overflow-hidden transition-colors duration-700 ease-in-out hover:text-secondary before:content-[''] before:absolute before:w-full before:h-0 before:z-[-1] before:rounded-[0_0_50%_50%] before:top-0 before:transition-all before:duration-1000 before:left-0 before:bg-white hover:before:h-[180%]"
            >
              See the latest work
            </motion.a>
            <motion.a
              href="#contact-us"
              whileHover={btnHover}
              whileTap={btnTap}
              className="relative p-5 border border-white rounded-xl cursor-pointer z-10 overflow-hidden transition-colors duration-700 ease-in-out hover:text-secondary before:content-[''] before:absolute before:w-full before:h-0 before:z-[-1] before:rounded-[50%_50%_0_0] before:bottom-0 before:transition-all before:duration-1000 before:left-0 before:bg-white hover:before:h-[180%]"
            >
              Contact me
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariant}
            animate="scrollAnimate"
            src="/scroll.webp"
            alt="scroll icon"
            className="w-12"
          />
        </motion.div>
        <motion.p
          variants={sliderVariant}
          initial="initial"
          animate="animate"
          className="absolute -bottom-28 whitespace-nowrap text-[50vh] opacity-5 will-change-transform"
        >
          React Developer JavaScript Aficionado
          {/* Front-End Enthusiast CSS Fanatic
        UI Designer */}
        </motion.p>
        <div className="h-full absolute right-0 top-0 lg:hidden">
          <img src="/dev2.webp" className="h-full" alt="hero img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
