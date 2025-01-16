"use client";
import { Loader2 } from "lucide-react";
import Logo from "./header/Logo";
import { motion } from "motion/react";

const Loading = () => {
  return (
    <div className="fixed min-h-screen w-full bg-white left-0 top-0 flex items-center justify-center z-50">
      <div className="flex flex-col gap-3 justify-center items-center text-center">
        <Logo text="Tulus" />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex items-center gap-2 text-green-600"
        >
          <Loader2 className="animate-spin" />{" "}
          <span className="font-semibold tracking-wide">Tulus is loading</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;
