import Modal from "../UI/Modal";
import Input from "../UI/Input";
import { useState } from "react";

export default function MakeModal({ open, onClose, make = null }) {
  const [makeData, setMakeData] = useState({
    make: "" || make.make,
    imageUrl: "" || make.imageUrl,
  });

  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-2xl font-bold">
        {make?.make ? "Edit Make" : "Add Make"}
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}
        className="flex flex-col gap-4"
      >
        <Input
          id="make"
          label="Make"
          type="text"
          value={make?.make}
          className="input input-primary"
          labelClass="my-2"
        />
        <Input
          id="imageUrl"
          label="Image Url"
          type="text"
          value={make?.imageUrl}
          className="input input-primary"
          labelClass="my-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Submit
        </button>
      </form>
    </Modal>
  );
}
