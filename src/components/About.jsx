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
      className="max-w-5xl mx-auto h-full flex items-center justify-center overflow-hidden relative"
      id="about"
    >
      <motion.div
        className=" bg-white  bg-opacity-5  rounded-2xl h-96 w-full  sm:h-1/2 absolute sm:!transform-none sm:hidden"
        style={{ y }}
      ></motion.div>

      <motion.div
        style={{ y: y2 }}
        className=" p-4 rounded-2xl gap-4 max-h-96 w-full flex sm:flex-col-reverse sm:gap-2 sm:max-h-full sm:!transform-none"
      >
        <div ref={ref} className="flex-1 sm:h-1/2 overflow-hidden">
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
              <h1 className="text-2xl font-bold text-center mb-4">About Me</h1>
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
