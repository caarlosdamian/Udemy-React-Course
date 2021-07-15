import React from "react";
import "../styles/Custom.css";

const Card = ({ name, title, avatar, children,onChangeName }) => {
  return (
    <div>
      <div className="card">
        <img src={avatar} alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          <h4>
            <b>{name}</b>
          </h4>
          <p>{title}</p>
          <p><button className="button"
          onClick={onChangeName}
          >Change Name</button></p>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Card;
