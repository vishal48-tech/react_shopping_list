import React from "react";

const ListInput = ({ item, handleChange }) => {
  return (
    <>
      <input
        type="checkbox"
        onChange={() => handleChange(item.id)}
        id={item.id}
        checked={item.checked}
      />
    </>
  );
};

export default ListInput;
