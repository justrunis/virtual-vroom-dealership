import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ImagePicker({ label, name, value, onChange }) {
  const [pickedImage, setPickedImage] = useState(value);
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    onChange(file);
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="block text-sm font-bold my-2" htmlFor={name}>
        {label}
      </label>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded-md"
        onClick={handlePickClick}
      >
        {pickedImage ? (
          <img
            src={pickedImage}
            alt="Picked"
            className="w-half h-half object-fit rounded-md"
          />
        ) : (
          <p className="text-gray-500">Pick an image</p>
        )}
      </motion.div>
      <input
        ref={imageInput}
        type="file"
        id={name}
        name={name}
        accept=".jpg,.jpeg,.png"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
}
