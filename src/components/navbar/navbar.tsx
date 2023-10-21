import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-10 md:bottom-20 w-full z-20 px-8"
    >
      <div className="flex md:max-w-md md:mx-auto py-3 place-items-center backdrop:blur-3xl font-semibold bg-gray-300 bg-opacity-90 rounded-lg justify-center gap-5">
        <Link
          href="/"
          className="text-zinc-500 font-medium text-md hover:text-black transition-colors duration-400 ease-in-out"
        >
          <p>Home</p>
        </Link>
        <Link
          href="/about"
          className="text-zinc-500 font-medium text-md hover:text-black transition-colors duration-400 ease-in-out"
        >
          <p>About</p>
        </Link>
        <Link
          href="/project"
          className="text-zinc-500 font-medium text-md hover:text-black transition-colors duration-400 ease-in-out"
        >
          <p>Project</p>
        </Link>
      </div>
    </motion.div>
  );
}

export default Navbar;
