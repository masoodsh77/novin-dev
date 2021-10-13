import React from "react";
function Cards({ firstName, lastName, pic }) {
  return (
    <div className="card w-100">
      <img
        src={pic}
        alt={firstName}
        className="CardImage"
      />
      <div>
        {firstName}
        {" "}
        {lastName}
      </div>
    </div>
  );
}

export default Cards;
