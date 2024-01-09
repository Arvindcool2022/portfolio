import { motion } from "framer-motion";
import Socials from "../Socials";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: { y: 0, opacity: 1 },
  closed: { y: -50, opacity: 0 },
};

const List = ({ setOpen }) => {
  const pages = ["home", "about", "skill", "projects", "contact-us"];
  return (
    <motion.div
      className="flex h-full w-full flex-col items-center justify-center gap-5"
      variants={variants}
    >
      {pages.map((page) => (
        <motion.a
          href={`#${page}`}
          key={page}
          className="text-4xl capitalize"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen((p) => !p)}
        >
          {page}
        </motion.a>
      ))}
      <motion.div
        variants={itemVariants}
        className="mt-4 hidden w-1/2 justify-between sm:flex"
      >
        <Socials />
      </motion.div>
    </motion.div>
  );
};

export default List;
