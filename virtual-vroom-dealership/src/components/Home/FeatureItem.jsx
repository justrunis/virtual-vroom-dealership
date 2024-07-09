import { motion } from "framer-motion";

const FeatureItem = ({
  iconClass,
  title,
  description,
  imageUrl,
  delay,
  alternate = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`p-4 flex ${
        alternate ? "flex-col 2xl:flex-row-reverse" : "flex-col 2xl:flex-row"
      } gap-5 items-center`}
    >
      <motion.img
        src={imageUrl}
        alt={title}
        className="w-100 h-100 mx-auto mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        width={1080}
        height={720}
      />

      <div>
        <h3 className="text-4xl font-semibold text-primary-content mb-2">
          {title}
        </h3>
        <p className="text-2xl text-primary-content ">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureItem;
