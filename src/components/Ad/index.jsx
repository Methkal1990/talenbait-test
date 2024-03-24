import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { FaEarthEurope } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";

import DeleteModal from "../DeleteModal";
import "./styles.css";

export default function Ad({ ad }) {
  const { id, title, description, image } = ad;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <li key={id} className="ad">
        <div className="ad__card">
          <div className="ad__card__head">
            <FaCircleUser className="ad__card__head__avatar" />
            <div className="ad__card__head__main">
              <div className="ad__card__head__main--name">methshop.com</div>
              <div className="ad__card__head__main--badge">
                Sponsored
                <FaEarthEurope />
              </div>
            </div>
          </div>
          <p className="ad__card__description">{description}</p>
          <img src={image} alt={title} />
          <div className="ad__card__actions">
            <div className="ad__card__actions--title">{title}</div>
            <div className="ad__card__actions--cta">Buy</div>
          </div>
          <hr />
          <div className="ad__card__facebook__actions">
            <div className="ad__card__facebook__actions--button">
              <AiOutlineLike />
              Like
            </div>
            <div className="ad__card__facebook__actions--button">
              <FaRegCommentAlt />
              Comment
            </div>
            <div className="ad__card__facebook__actions--button">
              <PiShareFat />
              Share
            </div>
          </div>
        </div>
        <div className="ad__actions">
          <Link to={`/ads/edit/${id}`} className="ad__edit">
            Edit
          </Link>
          <button
            className="ad__delete"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Delete
          </button>
        </div>
      </li>
      {modalOpen && (
        <DeleteModal id={id} closeModal={() => setModalOpen(false)} />
      )}
    </>
  );
}
