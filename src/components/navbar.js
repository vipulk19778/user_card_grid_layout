import React, { useContext } from "react";
import { Context } from "../../src/context/PassContext.js";
import "../styles/navbar_style.css";

export const Navbar = () => {
  const { loadGetUsers } = useContext(Context);

  return (
    <>
      <div className="navbar-container">
        <h1 className="header">Contact Details</h1>
        <button className="getUsers" onClick={loadGetUsers}>
          Get Users
        </button>
      </div>
    </>
  );
};
