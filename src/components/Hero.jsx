import { motion } from 'framer-motion';

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
    // x: '-40%'
    x: '0%'
  },

  animate: {
    x: '-90%',
    transition: {
      duration: 150,
      repeat: Infinity,
      repeatType: 'mirror'
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
          <button className="p-5 border border-white rounded-xl font-light cursor-pointer z-10">
            See the latest work
          </button>
          <button className="p-5 border border-white rounded-xl font-light cursor-pointer z-10">
            Contact me
          </button>
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
        className="absolute -bottom-28 whitespace-nowrap text-[50vh] opacity-5"
      >
        UI Designer React Developer CSS Fanatic Front-End Aficionado JavaScript
        Enthusiast
      </motion.p>
      <div className="h-full absolute right-0 top-0">
        <img src="/dev2.png" className="h-full" alt="hero img" />
      </div>
    </div>
  );
};

export default Hero;

// const [scrollDirection, setScrollDirection] = useState('down');
// const controls = useAnimation();

// useEffect(() => {
//   controls.start('animate');
// }, []);

// useEffect(() => {
//   const handleScroll = () => {
//     const scrollY = window.scrollY;

//     if (scrollY > 0) {
//       if (scrollDirection === 'down') {
//         controls.start('reverse'); // Start the slider animation in the reverse direction
//         setScrollDirection('up');
//       }
//     } else {
//       if (scrollDirection === 'up') {
//         controls.start('animate'); // Start the slider animation in the original direction
//         setScrollDirection('down');
//       }
//     }
//   };

//   window.addEventListener('scroll', handleScroll);

//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//   };
// }, [scrollDirection, controls]);
// reverse: {
//   x: '-0%',
//   transition: {
//     duration: 45,
//     repeat: Infinity,
//     repeatType: 'loop'
//   }
// },
