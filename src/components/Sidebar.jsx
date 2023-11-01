import { useState } from 'react';
import { motion } from 'framer-motion';
import List from './Sidebar Components/List';
import ToggleButton from './Sidebar Components/ToggleButton';

const variants = {
  open: {
    clipPath: 'circle(1400px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 100
    }
  },
  closed: {
    clipPath: 'circle(30px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 40
    }
  }
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="bg-white text-black flex flex-col items-center justify-center"
      animate={open ? 'open' : 'closed'}
    >
      <motion.div
        className="fixed top-0 left-0 bottom-0 w-96 z-40 bg-white"
        variants={variants}
      >
        <List setOpen={setOpen} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
