import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Form from "../components/Form";
import { useCreateAd } from "../context/ads";

export default function Create() {
  const navigate = useNavigate();
  const { id } = useParams();
  const createAd = useCreateAd();
  const [formData, setFormData] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    createAd({
      ...formData,
      productId: id,
    });
    navigate(`/ads/${id}`);
    toast.success("Ad created successfully");
  };

  return (
    <div className="create">
      <h1>Create Ad</h1>
      <Form
        buttonLabel="Create"
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}
