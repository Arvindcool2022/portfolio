import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Skill({ name, percentage, primaryAnimation }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true });
  const control = useAnimation();
  const progress = {
    initial: {
      width: 0,
      opacity: 0.3
    },
    animate: {
      width: `${percentage}%`,
      opacity: 1,
      transition: {
        delay: 0.15,
        duration: 3
      }
    }
  };

  useEffect(() => {
    if (visible) control.start('animate');
  }, [visible]);
  return (
    <motion.div variants={primaryAnimation} className="my-6 w-full">
      <span className="block font-semibold">{name}</span>
      <div className="mt-2 h-2 w-full rounded-md bg-[#0c0c1d] md:mt-0">
        <motion.span
          ref={ref}
          initial="initial"
          animate={control}
          variants={progress}
          className={`relative block h-full rounded-md bg-[#9e3ef2] opacity-0`}
        >
          <span
            className={`absolute -right-3.5 -top-7 z-10 rounded bg-[#9e3ef2] px-1.5 py-0.5 text-[9px] font-medium text-white before:absolute before:-bottom-0.5 before:left-2/4 before:z-[-1] before:h-2.5 before:w-2.5 before:-translate-x-2/4 before:rotate-45 before:bg-[#9e3ef2] before:content-['']`}
          >
            {percentage}
          </span>
        </motion.span>
      </div>
    </motion.div>
  );
}

export default Skill;
