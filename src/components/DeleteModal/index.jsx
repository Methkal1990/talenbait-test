import React from "react";
import { toast } from "react-toastify";

import { useDeleteAd } from "../../context/ads";
import "./styles.css";

export default function DeleteModal({ id, closeModal }) {
  const deleteAd = useDeleteAd();
  const handleDelete = () => {
    deleteAd(id);
    closeModal();
    toast.success("Ad deleted successfully");
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal__content">
          <h1>Are you sure you want to delete this ad?</h1>
          <div className="modal__buttons">
            <button className="modal__button--delete" onClick={handleDelete}>
              Delete
            </button>
            <button className="modal__button--cancel" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
