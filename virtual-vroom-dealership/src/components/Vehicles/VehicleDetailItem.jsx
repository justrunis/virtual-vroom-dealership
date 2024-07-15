import { motion } from "framer-motion";
import { makeFirstLetterUpperCase } from "../../utils/formating";

export default function VehicleDetailItem({
  icon: Icon,
  title,
  value,
  delay = 0,
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      title={title}
      className="w-1/2 flex items-center md:gap-1 text-xs md:text-md lg:text-lg"
    >
      <Icon className="mr-2" />
      <span className="font-bold mr-1 text-center">{title}:</span>
      {typeof value === "string" ? makeFirstLetterUpperCase(value) : value}
    </motion.span>
  );
}
