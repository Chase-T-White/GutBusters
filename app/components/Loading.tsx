import { motion } from "framer-motion";

const barVariants = {
  initial: {
    scaleY: 1,
  },
  animate: {
    scaleY: [1, 0, 1],
  },
};

const Loading = () => {
  return (
    <div className="px-8 py-12">
      <h2>Loading...</h2>
      <div className="w-[15rem] flex gap-2 mt-4">
        <motion.div
          variants={barVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="loadingBar bg-teal-300"
        ></motion.div>
        <motion.div
          variants={barVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1,
            delay: 0.1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="loadingBar bg-teal-400"
        ></motion.div>
        <motion.div
          variants={barVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1,
            delay: 0.2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="loadingBar bg-teal-500"
        ></motion.div>
        <motion.div
          variants={barVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1,
            delay: 0.3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="loadingBar bg-cyan-300"
        ></motion.div>
        <motion.div
          variants={barVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1,
            delay: 0.4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="loadingBar bg-cyan-400"
        ></motion.div>
        <motion.div
          variants={barVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1,
            delay: 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="loadingBar bg-cyan-500"
        ></motion.div>
        <motion.div
          variants={barVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1,
            delay: 0.6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="loadingBar bg-sky-300"
        ></motion.div>
        <motion.div
          variants={barVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1,
            delay: 0.7,
            repeat: Infinity,
            ease: "linear",
          }}
          className="loadingBar bg-sky-400"
        ></motion.div>
        <motion.div
          variants={barVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1,
            delay: 0.8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="loadingBar bg-sky-500"
        ></motion.div>
        <motion.div
          variants={barVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1,
            delay: 0.9,
            repeat: Infinity,
            ease: "linear",
          }}
          className="loadingBar bg-sky-600"
        ></motion.div>
      </div>
    </div>
  );
};

export default Loading;
