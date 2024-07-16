import { motion } from "framer-motion";
import Modal from "./Modal";

export default function ConfirmationModal({
  open,
  onClose,
  onConfirm,
  message,
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold">Confirm</h2>
        <p className="text-lg">{message}</p>
        <div className="flex gap-4">
          <button onClick={onConfirm} className="btn btn-success">
            Confirm
          </button>
          <button onClick={onClose} className="btn btn-error">
            Cancel
          </button>
        </div>
      </motion.div>
    </Modal>
  );
}
