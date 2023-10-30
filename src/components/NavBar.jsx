import Logo from './Logo';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';

const NavBar = () => {
  return (
    <div className="h-24">
      <header className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
        <Logo />
        <Sidebar />
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <a href="#">
            <img className="h-5" src="\dribbble.png" alt="dribbble icon" />
          </a>
          <a href="#">
            <img className="h-5" src="\facebook.png" alt="facebook icon" />
          </a>
          <a href="#">
            <img className="h-5" src="\instagram.png" alt="instagram icon" />
          </a>
          <a href="#">
            <img className="h-5" src="\youtube.png" alt="youtube icon" />
          </a>
        </motion.div>
      </header>
    </div>
  );
};

export default NavBar;
