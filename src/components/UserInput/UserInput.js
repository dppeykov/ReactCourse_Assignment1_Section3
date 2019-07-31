import React from "react";

const UserInput = ({ onChange, value }) => {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default UserInput;
