import { motion } from "framer-motion";

const AnimatedText = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-52 text-center md:text-8xl text-5xl text-slate-100 font-medium"
    >
      <span className="italic">A</span>RYO NOE
      <span className="underline">R</span>
      <p className=" mt-10 text-xs md:text-xl font-normal">
        Just a man who interest to web design & development
      </p>
    </motion.h1>
  );
};

export default AnimatedText;
