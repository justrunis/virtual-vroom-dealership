import { motion } from "framer-motion";

export default function HeroSection({ title, subtitle, animationDuration }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: animationDuration || 0.5 }}
      className="text-center"
    >
      <h1 className="text-6xl font-bold text-primary-content mb-4">{title}</h1>
      <p className="text-2xl text-primary-content mb-8">{subtitle}</p>
    </motion.div>
  );
}
