import Logo from './Logo';
import { motion } from 'framer-motion';

const NavBar = () => {
  return (
    <div className="h-24">
      <header className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
        <Logo />
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <a href="#">
            <img
              className="h-5"
              src="public\dribbble.png"
              alt="dribbble icon"
            />
          </a>
          <a href="#">
            <img
              className="h-5"
              src="public\facebook.png"
              alt="facebook icon"
            />
          </a>
          <a href="#">
            <img
              className="h-5"
              src="public\instagram.png"
              alt="instagram icon"
            />
          </a>
          <a href="#">
            <img className="h-5" src="public\youtube.png" alt="youtube icon" />
          </a>
        </motion.div>
      </header>
    </div>
  );
};

export default NavBar;
