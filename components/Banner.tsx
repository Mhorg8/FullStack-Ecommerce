"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  text: string;
  image: string;
}

const Banner = ({ text, image }: Props) => {
  return (
    <div className="relative w-full h-72 md:h-[75dvh] overflow-hidden flex items-center justify-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="absolute flex justify-center items-center z-20"
      >
        <motion.h2
          initial={{ color: "#fff" }}
          animate={{ color: "#000" }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="text-2xl md:text-4xl font-bold italic drop-shadow-sm  select-none"
        >
          {text}
        </motion.h2>
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full h-full relative"
      >
        <Image
          src={image}
          alt="Promotional banner showcasing trend items from top brands"
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
