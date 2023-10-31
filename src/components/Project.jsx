import { motion } from 'framer-motion';

const btnHover = {
  scale: 1.1,
  transition: { type: 'spring', stiffness: 250, damping: 30 }
};

const btnTap = {
  scale: 0.9,
  transition: { type: 'spring', stiffness: 500, damping: 30 }
};

const Project = ({ item }) => {
  console.log(item);
  return (
    <section className="flex items-center justify-center max-w-6xl mx-auto gap-4">
      <div className="flex-1 overflow-hidden">
        <img className="cover w-full h-full" src={item.img} />
      </div>
      <div className="flex-1">
        <h2 className="capitalize text-4xl font-bold text-white">
          {item.name}
        </h2>
        <p className="mb-3 text-purple-500">{item.tagLine}</p>
        <div className=" flex gap-4 mb-5">{...item.technology}</div>
        <p className="text-sm">{item.description}</p>
        <div className="flex gap-5 mt-4">
          <motion.a
            whileHover={btnHover}
            whileTap={btnTap}
            className="p-2 text-xs border border-white rounded-lg font-light cursor-pointer capitalize z-10"
          >
            source code
          </motion.a>
          <motion.a
            whileHover={btnHover}
            whileTap={btnTap}
            className="p-2 text-xs border border-white rounded-lg font-light cursor-pointer capitalize z-10"
          >
            live demo
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Project;
