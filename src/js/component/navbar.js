import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3 mx-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Contact List with Flux 😁</span>
      </Link>
      <div className="ml-auto">
        <Link to="/add-contact" className="mx-1">
          <button className="btn btn-primary">Add new contact 🐱‍🏍</button>
        </Link>
        <Link to="/" className="mx-1">
          <button className="btn btn-primary">Contact list</button>
        </Link>
      </div>
    </nav>
  );
};
