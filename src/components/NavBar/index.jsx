import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar__logo">
        Meth Awesome Shop
      </Link>
    </div>
  );
}
