import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = e => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed z-[99] h-12 w-12 rounded-full border border-white md:hidden"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 30, stiffness: 350 }}
    ></motion.div>
  );
};

export default Cursor;
