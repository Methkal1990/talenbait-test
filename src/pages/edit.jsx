import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Form from "../components/Form";
import { useEditAd, useGetAd } from "../context/ads";

export default function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const editAd = useEditAd();
  const ad = useGetAd(id);
  const [formData, setFormData] = useState(ad);

  const handleSubmit = (event) => {
    event.preventDefault();
    editAd({
      ...formData,
      image: formData.image || ad.image,
      id,
      productId: ad.productId,
    });
    navigate(`/ads/${ad.productId}`);
    toast.success("Ad updated successfully");
  };

  return (
    <div className="edit">
      <h1>Edit Ad</h1>
      <Form
        buttonLabel="Save"
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}
