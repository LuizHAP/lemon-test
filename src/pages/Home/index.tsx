import { Dialog } from "@/components/Dialog";
import { useState } from "react";

export function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Dialog isOpen={modalOpen} onClose={handleCloseModal} closeOnOverlayClick={true} title="Modal Title">
        <p>Modal content goes here...</p>
      </Dialog>
    </div>
  );
}