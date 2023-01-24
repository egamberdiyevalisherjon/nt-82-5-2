import React from "react";

const Feature = ({ icon, title, description }) => {
  return (
    <div className="bg-success">
      <h1>{title}</h1>
      <h2>{icon}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
