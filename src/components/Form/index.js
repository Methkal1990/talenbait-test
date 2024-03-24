import React from "react";

import "./styles.css";

export default function Form({
  buttonLabel = "Submit",
  onSubmit,
  formData,
  setFormData,
}) {
  return (
    <form onSubmit={onSubmit} className="form">
      <div className="form__group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData?.title || ""}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>
      <div className="form__group">
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={(e) => {
            const imageUri = URL.createObjectURL(e.target.files[0]);
            setFormData({ ...formData, image: imageUri });
          }}
        />
      </div>
      <div className="form__group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData?.description || ""}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          cols={30}
          rows={10}
        />
      </div>
      <button type="submit">{buttonLabel}</button>
    </form>
  );
}
