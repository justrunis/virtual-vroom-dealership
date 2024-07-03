import { motion } from "framer-motion";

export default function Image({
  src,
  alt,
  width,
  height,
  className = "rounded-full border-4 border-accent",
}) {
  return (
    <>
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className + " text-center"}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
      />
    </>
  );
}
