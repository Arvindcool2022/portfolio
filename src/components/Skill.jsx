import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Skill({ name, percentage, primaryAnimation }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true });
  const control = useAnimation();
  const progress = {
    initial: {
      width: '0',
      opacity: '1'
    },
    animate: {
      width: `${percentage}%`,
      opacity: '1',
      transition: {
        delay: 0.15,
        duration: 3
      }
    }
  };

  useEffect(() => {
    console.log(visible);
    if (visible) control.start('animate');
  }, [visible]);
  return (
    <motion.div variants={primaryAnimation} className="w-full my-6">
      <span className="block font-semibold">{name}</span>
      <div className="h-2 w-full rounded-md mt-2 bg-[#0c0c1d]">
        <motion.span
          ref={ref}
          initial="initial"
          animate={control}
          variants={progress}
          className={`relative block h-full rounded-md bg-[#9e3ef2] opacity-0 `}
        >
          <span
            className={`absolute bg-[#9e3ef2] text-[9px] font-medium text-white z-10 px-1.5 py-0.5 rounded -right-3.5 -top-7 before:content-[''] before:absolute before:h-2.5 before:w-2.5 before:z-[-1] before:bg-[#9e3ef2] before:-translate-x-2/4 before:rotate-45 before:left-2/4 before:-bottom-0.5`}
          >
            {percentage}
          </span>
        </motion.span>
      </div>
    </motion.div>
  );
}

export default Skill;
