import Logo from './Logo';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import Socials from './Socials';
const NavBar = () => {
  return (
    <div className="h-24 bg-primary">
      <header className=" mx-auto flex h-full max-w-7xl items-center justify-between sm:justify-end">
        <Logo />
        <Sidebar />
        <motion.div
          className="me-0 flex items-center gap-4 2xl:me-3 sm:hidden"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Socials />
        </motion.div>
      </header>
    </div>
  );
};

export default NavBar;

// <a href="#">
//   <img className="h-5" src="\dribbble.png" alt="dribbble icon" />
// </a>
// <a href="#">
//   <img className="h-5" src="\facebook.png" alt="facebook icon" />
// </a>
// <a href="#">
//   <img className="h-5" src="\instagram.png" alt="instagram icon" />
// </a>
// <a href="#">
//   <img className="h-5" src="\youtube.png" alt="youtube icon" />
// </a>
