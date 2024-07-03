import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-content p-4">
      <div className="flex justify-center items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          &copy; {new Date().getFullYear()} Virtual Vroom Dealership
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        ></motion.div>
      </div>
    </footer>
  );
}
