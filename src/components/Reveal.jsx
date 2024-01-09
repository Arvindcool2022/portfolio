import { useEffect, useRef } from 'react';
import { useInView, useAnimation, motion } from 'framer-motion';

const Reveal = ({
  children,
  width = 'fit-content',
  card = true,
  top = false
}) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const textControl = useAnimation();
  const barControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      textControl.start('visible');
      barControl.start('visible');
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
        animate={textControl}
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
          animate={barControl}
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
          animate={barControl}
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
