import React from "react";
import "../styles/Custom.css";

const Card = ({ name, title, avatar,onDelete }) => {
  return (
    <div>
      <div className="card">
        <img src={avatar} alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          <h4>
            <b>{name}</b>
          </h4>
          <p>{title}</p>
          <p>
            <button className="button button-red " onClick={onDelete}>Delete</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
