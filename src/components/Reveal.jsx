import { useState, useEffect, useRef } from 'react';
import { useInView, useAnimation, motion, easeOut } from 'framer-motion';

const Reveal = ({
  children,
  width = 'fit-content',
  card = true,
  top = false
}) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const mainControl = useAnimation();
  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start('visible');
      control.start('visible');
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ overflow: 'hidden', width, position: 'relative' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 750 },
          visible: {
            opacity: 1,
            y: 0,
            transition: card
              ? { duration: 0.5, delay: 0.3, ease: 'easeOut' }
              : { duration: 0.5, ease: 'easeIn' }
          }
        }}
        initial="hidden"
        animate={mainControl}
      >
        {children}
      </motion.div>
      {card && !top && (
        <motion.div
          variants={{
            hidden: { left: '0%' },
            visible: {
              left: '100%',
              transition: { duration: 0.5, ease: 'easeIn' }
            }
          }}
          initial="hidden"
          animate={control}
          style={{
            position: 'absolute',
            top: 4,
            bottom: 4,
            left: 0,
            right: 4,
            backgroundColor: 'white',
            zIndex: 20
          }}
        />
      )}
      {top && (
        <motion.div
          variants={{
            hidden: { bottom: '0%' },
            visible: {
              bottom: '100%',
              transition: { duration: 0.5, ease: 'easeIn' }
            }
          }}
          initial="hidden"
          animate={control}
          style={{
            position: 'absolute',
            top: 4,
            bottom: 0,
            left: 4,
            right: 4,
            backgroundColor: 'white',
            zIndex: 20
          }}
        />
      )}
    </div>
  );
};

export default Reveal;
