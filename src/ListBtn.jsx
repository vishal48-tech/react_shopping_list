import React from "react";

const ListBtn = ({ item, handleDelete }) => {
  return (
    <>
      <button onClick={() => handleDelete(item.id)}>Delete</button>
    </>
  );
};

export default ListBtn;
