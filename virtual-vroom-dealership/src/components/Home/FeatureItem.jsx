import { motion } from "framer-motion";

export default function FeatureItem({ iconClass, title, description, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="p-6 bg-white rounded-lg shadow-md"
    >
      <i className={`${iconClass} text-3xl text-gray-600 mb-4`}></i>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
