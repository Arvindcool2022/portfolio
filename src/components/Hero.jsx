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
    <div className="h-[calc(100vh-100px)] overflow-hidden bg-[linear-gradient(180deg,#0c0c1d,#111132)] ">
      <div className=" relative mx-auto h-full max-w-7xl">
        <motion.div
          className="mx-auto flex h-full flex-col justify-center gap-10 lg:w-full lg:items-center"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={textVariant}
            className="ps-1 text-3xl font-bold uppercase tracking-[10px] text-purple-700 md:tracking-widest"
          >
            Arvind A
          </motion.h1>
          <motion.h2
            variants={textVariant}
            className="max-w-min text-8xl font-bold lg:max-w-max lg:text-center lg:text-6xl"
          >
            Front-End Developer
          </motion.h2>
          <motion.div variants={textVariant} className="flex gap-5">
            <motion.a
              href="#projects"
              whileHover={btnHover}
              whileTap={btnTap}
              className="relative z-10 cursor-pointer overflow-hidden rounded-xl border border-white p-5 transition-colors duration-700 ease-in-out before:absolute before:left-0 before:top-0 before:z-[-1] before:h-0 before:w-full before:rounded-[0_0_50%_50%] before:bg-white before:transition-all before:duration-1000 before:content-[''] hover:text-secondary hover:before:h-[180%]"
            >
              See the latest work
            </motion.a>
            <motion.a
              href="#contact-us"
              whileHover={btnHover}
              whileTap={btnTap}
              className="relative z-10 cursor-pointer overflow-hidden rounded-xl border border-white p-5 transition-colors duration-700 ease-in-out before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-0 before:w-full before:rounded-[50%_50%_0_0] before:bg-white before:transition-all before:duration-1000 before:content-[''] hover:text-secondary hover:before:h-[180%]"
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
        <div className="absolute right-0 top-0 h-full lg:hidden">
          <img
            src="/dev2.webp"
            className="h-full object-cover"
            alt="hero img"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
