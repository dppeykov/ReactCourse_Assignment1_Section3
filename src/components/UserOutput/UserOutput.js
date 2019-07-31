import React from "react";

const UserOutput = ({ userName }) => {
  return (
    <div style={{ backgroundColor: "red", textAlign: "center" }}>
      <p style={{ backgroundColor: "yellow" }}> Username: {userName} </p>
      <p>Another text here</p>
    </div>
  );
};

export default UserOutput;
