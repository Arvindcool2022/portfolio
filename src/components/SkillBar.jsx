import { useEffect, useRef } from 'react';
import Skill from './Skill';
import { animate, motion, useAnimation, useInView } from 'framer-motion';

const variants = {
  initial: {
    y: 500,
    opacity: 0
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.03
    }
  }
};
function SkillsBar() {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true });
  const control = useAnimation();

  useEffect(() => {
    if (visible) control.start('animate');
  }, [visible]);

  return (
    <article className="flex h-full items-center justify-center text-white">
      <motion.div
        ref={ref}
        initial="initial"
        animate={control}
        variants={variants}
        className="relative mx-auto w-4/5  rounded-md bg-white bg-opacity-5 px-5 py-2 md:w-[95%]"
      >
        <h1 className="mb-7 mt-4 text-center text-xl font-medium uppercase">
          Skills
        </h1>

        <Skill name="HTML" percentage="95" primaryAnimation={variants} />
        <Skill name="CSS" percentage="80" primaryAnimation={variants} />
        <Skill name="JavaScript" percentage="80" primaryAnimation={variants} />
        <Skill name="React" percentage="75" primaryAnimation={variants} />
        <Skill name="SASS" percentage="85" primaryAnimation={variants} />
        <Skill name="git/Github" percentage="60" primaryAnimation={variants} />
        <Skill name="Bootstrap" percentage="75" primaryAnimation={variants} />
        <Skill name="Tailwind" percentage="75" primaryAnimation={variants} />
        <Skill
          name="Redux toolkit"
          percentage="60"
          primaryAnimation={variants}
        />
        <Skill
          name="Framer motion"
          percentage="40"
          primaryAnimation={variants}
        />
      </motion.div>
    </article>
  );
}

export default SkillsBar;
