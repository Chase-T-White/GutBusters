import { motion } from "framer-motion";

const Button = ({ action }: string | any) => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        duration: 0.2,
        ease: "linear",
      }}
      className="px-8 py-2 rounded-full text-white font-bold btn-primary"
    >
      {action}
    </motion.button>
  );
};

export default Button;
