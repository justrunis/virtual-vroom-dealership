import { motion } from "framer-motion";
import Input from "../components/UI/Input";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-full mb-20 lg:mb-0">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-primary-content"
      >
        Contact Us
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-primary-content mt-4 text-center"
      >
        We are here to help you with any questions you may have. Please feel
        free to reach out to us.
      </motion.p>
      <div className="flex flex-col gap-4 mt-8">
        <Input
          type="text"
          placeholder="Name"
          className="input input-primary"
          delay={0.4}
        />
        <Input
          type="email"
          placeholder="Email"
          className="input input-primary"
          delay={0.6}
        />
        <Input
          type="textarea"
          placeholder="Message"
          className="input input-primary"
          isTextArea={true}
          delay={0.8}
        />
        <motion.button
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="btn btn-primary"
        >
          Submit
        </motion.button>
      </div>
    </div>
  );
}
