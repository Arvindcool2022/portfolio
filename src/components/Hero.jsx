import { motion } from 'framer-motion';
import { btnHover, btnTap } from './buttonAnimation';

const textVariant = {
  initial: {
    x: -500,
    opacity: 0
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
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
    <div className="h-[calc(100vh-96px)] bg-[linear-gradient(180deg,#0c0c1d,#111132)] overflow-hidden relative">
      <motion.div
        className="max-w-screen-xl mx-auto h-full flex flex-col justify-center gap-10"
        variants={textVariant}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          variants={textVariant}
          className="text-3xl text-purple-700 tracking-[10px] font-bold uppercase"
        >
          Arvind A
        </motion.h1>
        <motion.h2
          variants={textVariant}
          className="text-8xl max-w-min font-bold"
        >
          Front-End Developer
        </motion.h2>
        <motion.div variants={textVariant} className="flex gap-5">
          <motion.button
            whileHover={btnHover}
            whileTap={btnTap}
            className="relative p-5 border border-white rounded-xl cursor-pointer z-10 overflow-hidden transition-colors duration-700 ease-in-out hover:text-secondary before:content-[''] before:absolute before:w-full before:h-0 before:z-[-1] before:rounded-[0_0_50%_50%] before:top-0 before:transition-all before:duration-1000 before:left-0 before:bg-white hover:before:h-[180%]"
          >
            See the latest work
          </motion.button>
          <motion.button
            whileHover={btnHover}
            whileTap={btnTap}
            className="relative p-5 border border-white rounded-xl cursor-pointer z-10 overflow-hidden transition-colors duration-700 ease-in-out hover:text-secondary before:content-[''] before:absolute before:w-full before:h-0 before:z-[-1] before:rounded-[50%_50%_0_0] before:bottom-0 before:transition-all before:duration-1000 before:left-0 before:bg-white hover:before:h-[180%]"
          >
            Contact me
          </motion.button>
        </motion.div>
        <motion.img
          variants={textVariant}
          animate="scrollAnimate"
          src="/scroll.png"
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
        React Developer JavaScript Enthusiast
        {/* Front-End Aficionado CSS Fanatic
        UI Designer */}
      </motion.p>
      <div className="h-full absolute right-0 top-0">
        <img src="/dev2.png" className="h-full" alt="hero img" />
      </div>
    </div>
  );
};

export default Hero;
