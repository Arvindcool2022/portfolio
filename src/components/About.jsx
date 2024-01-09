import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import IMG from '../assets/dev.webp';
import Reveal from './Reveal';

// function useParallax(value, distance) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const ctrl = useAnimation();

  useEffect(() => {
    if (isInView) ctrl.start('animate');
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: ref
  });

  const y = useTransform(scrollYProgress, [0, 1], [700, -700]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-500, 500]);

  return (
    <div
      className="relative mx-auto flex h-full max-w-5xl items-center justify-center overflow-hidden"
      id="about"
    >
      <motion.div
        className=" absolute h-96 w-full rounded-2xl bg-white  bg-opacity-5 sm:hidden sm:h-1/2 sm:!transform-none"
        style={{ y }}
      ></motion.div>

      <motion.div
        style={{ y: y2 }}
        className=" flex max-h-96 w-full gap-4 rounded-2xl p-4 sm:max-h-full sm:!transform-none sm:flex-col-reverse sm:gap-2"
      >
        <div ref={ref} className="flex-1 overflow-hidden sm:h-1/2">
          <motion.img
            variants={{
              initial: { y: -750 },
              animate: { y: 0, transition: { duration: 0.8 } }
            }}
            initial="initial"
            animate={ctrl}
            src={IMG}
            alt="animated-img"
          />
        </div>
        <div className="flex-1 self-center sm:h-full ">
          <div className="flex justify-center">
            <Reveal>
              <h1 className="mb-4 text-center text-2xl font-bold">About Me</h1>
            </Reveal>
          </div>
          <div className="sm:text-center">
            <Reveal>
              <p>
                "Hey there, I'm not your average developer. I'm a digital
                craftsman who's passionate about CSS and Framer Motion, bringing
                life and personality to web interfaces.
              </p>
            </Reveal>
            <Reveal>
              <strong>With deep knowledge in JavaScript and React,</strong>
              <p>
                {' '}
                I sculpt user-friendly experiences, infusing them with
                interactive magic. I'm well-versed in Bootstrap,TailwindCSS,Sass
                for responsive design and use Redux and React Router for
                seamless data flow and navigation. Git keeps my work organized
                and collaborative.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Navigating the web should be an engaging adventure, and that's
                what I aim to deliver. Explore my portfolio to see how I blend
                aesthetics with functionality, creating memorable digital
                journeys."
              </p>
            </Reveal>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
