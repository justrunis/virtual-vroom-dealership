import Modal from "../UI/Modal";
import Input from "../UI/Input";
import ImagePicker from "../UI/ImagePicker";
import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { makesActions } from "../../store/slices/makesSlice";

export default function MakeModal({ open, onClose, onSuccess, make = null }) {
  const dispatch = useDispatch();

  const [makeData, setMakeData] = useState({
    make: "" || make.make,
    imageUrl: "" || make.imageUrl,
  });

  function startsWith(str, prefix) {
    return str.slice(0, prefix.length) === prefix;
  }

  function onSubmit(e) {
    e.preventDefault();
    let imageUrl = makeData.imageUrl;
    if (startsWith(makeData.imageUrl, "http") && makeData.imageUrl) {
      if (!startsWith(makeData.imageUrl, "blob:")) {
        // create a blob link for image if it doesn't exist already
        const blob = new Blob([makeData.imageUrl], {
          type: makeData.imageUrl.type,
        });
        imageUrl = URL.createObjectURL(blob);
      }
    }

    const formData = {
      make: makeData.make,
      imageUrl: imageUrl,
    };

    if (make?.make) {
      dispatch(makesActions.updateMake({ id: make.id, make: formData }));
      onClose();
    } else {
      dispatch(makesActions.addMake(formData));
      onClose();
    }
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      className="w-half h-half overflow-y-auto"
    >
      <h2 className="text-2xl font-bold">
        {make?.make ? "Edit Make" : "Add Make"}
      </h2>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <Input
          id="make"
          label="Make"
          name="make"
          type="text"
          value={makeData.make}
          className="input input-primary"
          labelClass="my-2"
          onChange={(e) => setMakeData({ ...makeData, make: e.target.value })}
        />
        <ImagePicker
          label={"Make Image"}
          name={"imageUrl"}
          value={makeData.imageUrl}
          onChange={(file) => setMakeData({ ...makeData, imageUrl: file })}
        />
        <div className="flex justify-start gap-4">
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.1 }}
            type="submit"
            className="btn btn-success"
          >
            Submit
          </motion.button>
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.1 }}
            onClick={onClose}
            className="btn btn-error"
          >
            Cancel
          </motion.button>
        </div>
      </form>
    </Modal>
  );
}
